const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Configuración de bodyParser para manejar JSON y urlencoded


// Configuración de la conexión a la base de datos
const connection = mysql.createPool({
  host: 'localhost',
  user: 'martin',
  password: '12301230',
  database: `integrador`
});
app.use(cors({
  origin: 'http://localhost:3000' // Solo permitir solicitudes desde este origen
}));

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ha ocurrido un error');
});

connection.query('SELECT 1 + 1 as result')
  .then(([rows, fields]) => {
    console.log(`La conexión a la base de datos funciona correctamente. Resultado: ${rows[0].result}`);
  })
  .catch((err) => {
    console.error(`Ha ocurrido un error al ejecutar la consulta: ${err}`);
  });

// Endpoint para listar alumnos

app.get('/ruta', (req, res) => {
  const data = {
    // Aquí irían los datos obtenidos de la base de datos
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});


app.get('/alumnos', async (req, res, next) => {
  try {
    const [rows, fields] = await connection.query('SELECT * FROM alumno');
   
    res.set('Content-Type', 'application/json');
   // res.setHeader('Content-Type', 'application/json');
    res.json(rows[0]);
 
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
/*
// Endpoint para eliminar alumno
app.delete('/alumnos/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await connection.query('DELETE FROM alumno WHERE id = ?', [id]);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// Endpoint para crear alumno
app.post('/alumnos', async (req, res, next) => {
  const { nombre, apellido, dni } = req.body;
  try {
    const [result] = await connection.query('INSERT INTO alumno (nombre, apellido, dni) VALUES (?, ?, ?)', [nombre, apellido, dni]);
    const id = result.insertId;
    const [row] = await connection.query('SELECT * FROM alumno WHERE id = ?', [id]);
    res.status(201).json(row);
  } catch (error) {
    next(error);
  }
});

// Endpoint para modificar alumno
app.put('/alumnos/:id', async (req, res, next) => {
  const id = req.params.id;
  const { nombre, apellido, dni } = req.body;
  try {
    await connection.query('UPDATE alumno SET nombre = ?, apellido = ?, dni = ? WHERE id = ?', [nombre, apellido, dni, id]);
    const [row] = await connection.query('SELECT * FROM alumno WHERE id = ?', [id]);
    res.json(row);
  } catch (error) {
    next(error);
  }
});

// Endpoint para listar cursos
app.get('/cursos', async (req, res, next) => {
  try {
    const [rows, fields] = await connection.query('SELECT * FROM curso');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

// Endpoint para eliminar curso y sus inscripciones
app.delete('/cursos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const curso = await db.Curso.findByPk(id);

    if (!curso) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }

    await db.AlumnoCurso.destroy({ where: { id_curso: id } });
    await curso.destroy();
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al eliminar el curso' });
  }
});

*/

