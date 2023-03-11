const express = require('express')
const routes = express.Router()


routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM usuario', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/Alumnos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM alumno', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


routes.post('/alumnoadd', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO alumno set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('¡Alumno dado de alta!')
        })
    })
})

routes.delete('/Alumno/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Alumno WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('¡Alumno dado de baja!')
        })
    })
})


routes.put('/Alumno/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE alumno set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('¡Alumno actualizado!')
        })
    })
})
//cursos
routes.get('/cursos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM curso', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})
routes.post('/cursoadd', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO curso set ?', [req.body], (err, rows)=>{
            if(err) return res.send("no se pudo dar de alta el curso")

            res.send('curso dado de alta!')

        })
    })
})
routes.delete('/cursodel/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM curso WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Curso dado de eliminado!')
        })
    })
})

routes.get('/cursos/:cursoid/gestion_alumnos', async (req, res) => {
 
    const { cursoid } = req.params;
    console.log("el id es", cursoid);

    req.getConnection(async(err, conn)=>{
        try {
            
            // Obtener los registros de alumnos_cursos para el curso indicado
            const alumnosCursos = await conn.query(
                'SELECT id_alumno FROM alumno_curso WHERE id_curso = ?',
                [req.params.cursoid]
              );
                console.log("el id es",req.params.cursoid);
                    // Convertir objeto a array
            const arrayAlumnosCursos = Object.values(alumnosCursos);
            
            // Obtener la información de cada alumno inscrito
            const alumnos = await Promise.all(
            arrayAlumnosCursos.map(async (ac) => {
                
                const [alumno] = await conn.query('SELECT * FROM alumno WHERE id = ?', [
                ac.id_alumno,
                ]);
                return alumno;
            })
            );
        
            res.json(alumnos);
          } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener los alumnos inscritos');
          }
        
    })
    
  });
  
module.exports = routes