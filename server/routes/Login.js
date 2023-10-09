const express = require('express');
const mysql = require('mysql2'); 
const Router = express.Router();

const db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'progra_web'
};

Router.post('/', (req, res) => {
    const { Nombre_usuario, Contraseña } = req.body;
  
    if (!Nombre_usuario || !Contraseña) {
      res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
      return;
    }
  
    const values = [Nombre_usuario, Contraseña];
    const connection = mysql.createConnection(db); 
  
    connection.connect((err) => {
      if (err) {
        console.error('Error en la conexión:', err);
        res.status(500).json({ error: 'Error en la conexión a la base de datos' });
        return;
      }
  
      const sql = "SELECT * FROM usuario WHERE Nombre_usuario = ? AND Contraseña = ?";
  
      connection.query(sql, values, (err, result) => {
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

module.exports = Router;
