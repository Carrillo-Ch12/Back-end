const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};

// ... (código existente)

const Perfil = async (req, res) => {
  const { Nombre } = req.params; // Cambiado de req.body a req.params
  // const values = Id; // Comentado ya que no parece estar siendo utilizado

  try {
    const connection = await mysql.createConnection(db);
    const [rows] = await connection.query('SELECT * FROM usuario WHERE Nombre_usuario = ?', [Nombre]); // Cambiado de values a [Nombre]

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(400).json({ error: 'Usuario no existe' });
    }

    await connection.end();
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
};

// ... (código existente)

module.exports = Perfil;


module.exports = Perfil;
