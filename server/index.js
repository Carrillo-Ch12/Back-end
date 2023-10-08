const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const bd = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { Nombre_usuario, Contraseña } = req.body;

  if (!Nombre_usuario || !Contraseña) {
    res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    return;
  }

  const values = [Nombre_usuario, Contraseña];
  const connection = mysql.createConnection(bd);

  connection.connect((err) => {
    if (err) {
      console.error('Error en la conexión:', err);
      res.status(500).json({ error: 'Error en la conexión a la base de datos' });
      return;
    }

    connection.query("SELECT * FROM usuario WHERE Nombre_usuario = ? AND Contraseña = ?", values, (err, result) => {
      if (err) {
        console.error('Error en la consulta:', err);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
      } else {
        if (result.length > 0) {
          res.status(200).json(result[0]);
        } else {
          res.status(400).json({ error: 'Usuario no existe' });
        }
      }
      
      connection.end();
    });
  });
});

app.listen(4001, () => console.log('Inicio de servidor'));
