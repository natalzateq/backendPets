//const express = require('express');
const User = require('../controllers/user.controller');
const Pet = require('../controllers/pet.controller');

//const router = express.Router();

module.exports = function(app)
{
    //routes user
    app.get('/users', (req, res) => 
    {  
        User.getUsers(req,res);
        
    })

    app.get('/users/:id', (req, res) => 
    {  
        User.getUserId();
        
    })

    app.post('/users', (req, res) => 
    {  
        User.addUser();
        
    })

    app.put('/users/:id', (req, res) => 
    {  
        User.updateUser();
        
    })

    app.delete('/users/:id', (req, res) => 
    {  
        User.deleteUser();
        
    })

    //rotes pets
    app.get('/pets', (req, res) => 
    {  
        Pet.getPets();
        
    })

    app.get('/pets/:id', (req, res) => 
    {  
        Pet.getPetId();
        
    })

    app.post('/pets', (req, res) => 
    {  
        Pet.addPet();
        
    })

    app.put('/pets/:id', (req, res) => 
    {  
        Pet.updatePet();
        
    })

    app.delete('/pets/:id', (req, res) => 
    {  
        Pet.deletePet();
        
    })

}

//module.exports = router;

