
const User = require('../models/user');
module.exports = function(app)
{

    app.get('/users', (req, res) => 
    {  
        User.getUsers((err,data) =>
        {
        
          
            if(err) 
            { 
               res.send(err);
            }
            else
            {
            // res.status(200).json(data);
                res.send(data);
            }
        })
        
    })

    
        

    app.get('/users/:id', (req, res) => 
    {  
        
        User.getUserId(req.params.id,(err,data) =>
        {

            if(data!="")
            {
                res.send(data);
            }
            else
            {
                res.statusCode = 404;
                res.send('el dato solicitado no existe')
               
            }
        
        })
        
    })


    app.delete('/users/:id', (req, res) => 
    {  
        
        User.deleteUser(req.params.id,(err,data) =>
        {

            if(data!="")
            {
                res.send(data);
            }
            else
            {
                res.statusCode = 404;
                res.send('el dato solicitado no existe')
               
            }
        
        })
        
    })


    app.post('/users', (req, res) => 
    {
       console.log(req.body);
       console.log(Object.keys(req.body).length);
       if(Object.keys(req.body).length==0)
       {
           res.send('no envio datos o no estan en formato json');
       }
       else
       {

            let json = req.body;

            first_name= json['first_name'],
            last_name= json['last_name'],
            document_type= json['document_type'],
            document_number= json['document_number'],
            genero= json['genero'],
            email= json['email'],
            password= json['password']

            let datosUser =
            {
                first_name: first_name,
                last_name: last_name,
                document_type: document_type,
                document_number: document_number,
                genero:  genero,
                email: email,
                password: password
            };

            if(first_name!="" && last_name!="" && document_type!="" && document_number!="" && genero!="" && email!="" && password!="")
            {
           
                User.addUser(datosUser, (err,data) =>
                {
                    if(err)
                    {
                        res.json({'error' : 'no se inserto verifique' });
                        return ;
                    }
                    
                    if(data)
                    {
                        //res.send(data.InsertId);
                        res.json({'message' : 'se inserto' });
                        //console.log('correcto'+data.InsertId);
                    }
                    else
                    {
                        res.status(404);
                        res.json({'message' : 'No se inserto' });
                        return;
                        //console.log('no se inserto');
                    }
                })
            }
            else
            {
                res.json({'message' : 'no estan completos los campos' });
                //console.log('no estan completos los campos');
            }
       
                    /* for (var key in json)
                    {
                        if (json.hasOwnProperty(key)) 
                        {
                            console.log("La clave es " + key+ " y el valor es " + json[key]);
                        }
                    } */

        }
    })




}



