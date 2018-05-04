
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
       console.log('hola mundo');
    })

//     app.post('/users', (req, res) => 
//     {

//         console.log(req.body);
//         console.log('req.body');
//         console.log(req.body.lenght);

        

//         if(req.body.lenght != undefined)
//         {
//             console.log(req.body);
//             res.send('hola');

//         }
//         else
//        res.send('no se envio');




// //         {
// //         if(req.body.lenght != undefined)
// //         {
           
        
// //         if(req.body.first_name & req.body.last_name && req.body.document_type && req.body.document_number
// //     && req.body.genero && req.body.email && req.body.password)
// //     {

// //         // let DataUser = {
            
// //         //     first_name: req.body.first_name,
// //         //     last_name: req.body.last_name,
// //         //     document_type: req.body.document_type,
// //         //     document_number: req.body.document_number,
// //         //     genero: req.body.genero,
// //         //     email: req.body.email,
// //         //     password: req.body.password,
// //         //     created_at: new Date(),
// //         //     updated_at: null


// //         // };

// //         User.addUser(DataUser, (err,data) =>
// //         {
// //             if(data)
// //             {
// //                 res.send(data.InsertId);

// //             }
// //             else
// //             {
// //                 res.statusCode(404);
// //                 res.send('No se ha insertado');
// //             }
// //         })
// //     }
    
        

// // else
// // {
// //     console.log('no ingreso los datos');
// //     //res.statusCode(404);
// //     res.send('Ingrese los datos');
// // }

// //         }

        
        
//     })

//     app.put('/users/:id', (req, res) => 
//     { 
        
        
        
//     })

//     app.delete('/users/:id', (req, res) => 
//     { 
        

//     })


}



