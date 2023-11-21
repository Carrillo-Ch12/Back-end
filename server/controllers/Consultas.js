const db = require('../database/Config_mysql');

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

const Consulta3= async (req, res) => {
  db.query("SELECT u1.Nombre_usuario AS Usuario,   GROUP_CONCAT(u2.Nombre_usuario ORDER BY u2.Nombre_usuario ASC) AS Seguidores FROM usuario u1 LEFT JOIN follow f ON u1.Id_usuario = f.Id_seguido LEFT JOIN usuario u2 ON f.Id_seguidor = u2.Id_usuario GROUP BY u1.Nombre_usuario ORDER BY u1.Nombre_usuario;", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error en la consulta' });
    }
  });
};


const Consulta4= async (req, res) => {
  db.query("SELECT u.Nombre_usuario AS Usuario,   GROUP_CONCAT(lv.Titulo_lista ORDER BY lv.Titulo_lista ASC) AS Listas_de_Videojuegos FROM usuario u LEFT JOIN lista_videojuegos lv ON u.Id_usuario = lv.Id_usuario GROUP BY u.Nombre_usuario ORDER BY u.Nombre_usuario;", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error en la consulta' });
    }
  });
};

const Consulta5= async (req, res) => {
  db.query("SELECT u.Nombre_usuario AS Usuario, COUNT(c.Id_comentario) AS Cantidad_de_Comentarios  FROM usuario u   LEFT JOIN comentario c ON u.Id_usuario = c.Id_usuario  GROUP BY u.Nombre_usuario  ORDER BY Cantidad_de_Comentarios DESC;", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
      res.status(500).json({ error: 'Error en la consulta' });
    }
  });
};
module.exports = { Consulta1, Consulta2, Consulta3, Consulta4, Consulta5 };