const mysql = require('mysql');

connection = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mypets',
    port: 8889,
});

let userModel = [];


userModel.getUsers = (callback) => 
{
     if(connection)
     {
         connection.query('select * from user', (err, rows) => 
         {
             if(err)
             {
                 throw err;
             }
             else
             callback(null, rows);

         })
     }

};

userModel.getUserId= (id,callback) => 
{
     if(connection)
     {
         connection.query(`select * from user where id =${id}`, (err, rows) => 
         {
             if(err)
             {
                 //throw err;
                 msg:'No se encontrol el id';
                 
             }
             else
             callback('', rows);
           

         })
     }

};

userModel.getUserId= (id,callback) => 
{
     if(connection)
     {
         connection.query(`select * from user where id =${id}`, (err, rows) => 
         {
             if(err)
             {
                 //throw err;
                 msg:'No se encontrol el id';
                 
             }
             else
             callback('', rows);
           

         })
     }

};

userModel.deleteUser= (id,callback) => 
{
     if(connection)
     {
         connection.query(`delete from user where id =${id}`, (err, rows) => 
         {
             if(err)
             {
                 //throw err;
                 msg:'No se encontrol el id';
                 
             }
             else
             callback('', 'se elimino');
           

         })
     }

};

userModel.addUser= (dataUser,callback) => 
{
     if(connection)
     {
         connection.query('INSERT INTO users SET ? ', dataUser, (err, rows) => 
         {
             if(err)
             {
                 //throw err;
                 msg: 'No se encontrol el id';
                 
             }
             else
             callback(null, {
                'InsertId': result.insertId
            })
           

         })
     }

};



module.exports= userModel;