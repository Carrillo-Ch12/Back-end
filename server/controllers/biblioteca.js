const db = require('../database/Config_mysql');

const mostrarJuegos = (req, res) => {
  db.query("SELECT * FROM videojuego", (err, rows, fields) => {
    if (!err) {
      const juegos = rows.map(row => ({
        titulo: row.Titulo, // Asumiendo que hay una columna Titulo en tu tabla videojuego
        img: row.Portada // Asumiendo que hay una columna Img en tu tabla videojuego
      }));

      res.send(juegos);
    } else {
      console.log(err);
    }
  });
}

module.exports = mostrarJuegos;

