const mysql =require('mysql2');

const bd = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'progra_web'
  });
  bd.connect((err)=>{
        if(!err){ console.log('se conecto')}
        else{console.log('no se conecto')}
});

module.exports =bd;