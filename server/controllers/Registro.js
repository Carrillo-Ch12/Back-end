const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};

const registro = async (req, res) => {
  const { Nombre_usuario, Correo, Contraseña, Foto_de_perfil } = req.body; 
  if (!Nombre_usuario || !Correo || !Contraseña || !Foto_de_perfil) { 
    res.status(400).json({ error: 'Nombre de usuario, contraseña, correo y foto de perfil son obligatorios' });
    return;
  }

  const values = [Nombre_usuario, Correo, Contraseña, Foto_de_perfil]; 

  try {
    const connection = await mysql.createConnection(db);

    const [rows] = await connection.execute('INSERT INTO usuario (Nombre_usuario, Correo, Contraseña, Foto_de_perfil) VALUES (?, ?, ?, ?)', values);

    if (rows.affectedRows > 0) {
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } else {
      res.status(400).json({ error: 'No se pudo registrar el usuario' });
    }

    await connection.end();
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
};

module.exports = registro;
