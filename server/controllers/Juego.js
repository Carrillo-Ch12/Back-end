const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};
const Juego = async (req, res) => {
    const { Titulo } = req.params; 
  
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.query('SELECT * FROM videojuego WHERE Titulo = ?', [Titulo]);
  
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(400).json({ error: 'Juego no encontrado' });
      }
  
      await connection.end();
    } catch (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
  };


module.exports = Juego;


