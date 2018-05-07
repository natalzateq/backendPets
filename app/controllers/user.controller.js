const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

//get list of users
router.get('/users', async (req, res) => 
{
    const users = await User.find();
    if(users)
      res.json(users);
    else
      res.status(404).json("no hay datos para mostrar");
   
});

// get user by id
router.get('/users/:id', async (req, res) => 
{
    let { id } = req.params;
    const user = await User.findById(req.params.id);
    console.log(user)
    if(!user)
      res.status(404).json("el id no existe");
      
    else
      res.json(user);
   
});

// add a user to collection
router.post('/users', async (req, res) => 
{
    let cant = Object.keys(req.body).length;
    console.log(cant);
  
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let documentType = req.body.documentType;
    let documentNumber = req.body.documentNumber;
    let genre = req.body.genre;
    let email = req.body.email;
    let password = req.body.password;

    if(firstName && lastName && documentType && documentNumber && genre && email && password)
    {
        const user = new User(
        { 
            firstName, lastName, documentType, documentNumber, genre, email, password
        });
        
        const exists= await User.findOne({email: email});
        if(exists!=null)
        {
          res.status(404).json("el email ya fue registrado");
        }
        else
        {
            const save = await user.save();
            res.json(save);
        }

    }
    else
    {
        res.status(404).json(
        {
            error: 'no envio datos o no son correctos'
        });

    }
});

//update user by id
router.put('/users/:id', async (req, res) => 
{   
    //let { id } = req.params;
    let id = req.params.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let documentType = req.body.documentType;
    let documentNumber = req.body.documentNumber;
    let genre = req.body.genre;
    let email = req.body.email;
    let password = req.body.password;
    console.log('id:'+id);
    if(firstName && lastName && documentType && documentNumber && genre && email && password)
    {
        //const exists= await User.findOne({email: email},{_id:!id});
        const exists= await User.findOne({_id: id });
        //const exists= await User.find({_id: {$ne: id }},{email: email});

        console.log(exists);

        if(exists.email!=email)
        {
            const correo= await User.findOne({email: email});

            if(correo!=null)
            {
            res.status(404).json("el email ya fue registrado");
            console.log('el email ya fue registrado');
            }
            else
            {
                const update =  await User.update({_id: id}, {firstName, lastName, documentType, 
                    documentNumber, genre, email, password});
                console.log('update'+update)
                res.json(update);
            }
        }
        else
        {
            const update =  await User.update({_id: id}, {firstName, lastName, documentType, 
                documentNumber, genre, email, password});
            console.log('update'+update)
            res.json(update);
        }

    }
    else
    {
        res.status(404).json(
        {
            error: 'no envio datos o no son correctos'
        });

    }
    
});

// delete a user by id
router.delete('/users/:id', async (req, res) => 
{
    let { id } = req.params;
    const user = await User.findById(req.params.id);
    console.log(user)
    if(user)
    {
      const deleted = await User.remove({_id: id});
      if(deleted)
        res.json({sucess: 'se elimino el id'});
  
    }
    else
      res.status(404).json({error: 'no existe el id'});
  
});

module.exports = router;
