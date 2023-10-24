const db = require('../database/Config');

const Consulta1 = async (req, res) => {
  db.query("SELECT v.Titulo, v.Likes FROM Videojuego v JOIN Se_encuentra se ON v.Titulo = se.Titulo WHERE se.Id_plataforma = 1 AND v.Likes > 1", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error en la consulta' });
    }
  });
};

const Consulta2 = async (req, res) => {
  db.query("SELECT u.Nombre_usuario AS Usuario, COUNT(f.Id_seguidor) AS Cantidad_Seguidores FROM Usuario u LEFT JOIN Follow f ON u.Id_usuario = f.Id_seguido GROUP BY Usuario ORDER BY Cantidad_Seguidores DESC", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error en la consulta' });
    }
  });
};

module.exports = { Consulta1, Consulta2 };