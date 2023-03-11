const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const routes = require('./routes')
const jwt = require('jsonwebtoken');

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'martin',
    password: '1230',
    database: 'integrador'
}



// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())




// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)
// login --------------------------------------------
app.post('/api/login', (req, res) => {
	const { username, password } = req.body
	const values = [username, password]
	var connection = mysql.createConnection(dbOptions)
	connection.query("SELECT * FROM usuario WHERE nickname = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				
                const token = jwt.sign(
                    { id: result[0].id, username: result[0].nickname, role:  result[0].rol },
                    'secret'
                  );
                  res.status(200).json({ token });
                
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})
	connection.end()
})

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})
