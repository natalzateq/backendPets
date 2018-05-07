const express = require('express');
const Pet = require('../models/pet.model');
const router = express.Router();

// get list of pets
router.get('/pets', async (req, res) => 
{
    const pets = await Pet.find();
    if(pets)
      res.json(pets);
    else
      res.status(404).json("no hay datos para mostrar");
   
});


// get pet by id
router.get('/pets/:id', async (req, res) => 
{
    let { id } = req.params;
    const pet = await Pet.findById(req.params.id);
    console.log(pet)
    if(!pet)
      res.status(404).json("el id no existe");
      
    else
      res.json(pet);
   
});

// add a pet at collection pets
router.post('/pets', async (req, res) => 
{
    let cant = Object.keys(req.body).length;
    console.log(cant);
  
    let name = req.body.name;
    let age = req.body.age;
    let clasification = req.body.clasification;
    let race = req.body.race;
    let genre = req.body.genre;

    if(name && age && clasification && race && genre)
    {

        const pet = new Pet(
        { 
            name,age,clasification,race,genre
        });
        
        const save = await pet.save();
        console.log(save);
        res.json(save);

    }
    else
    {
        res.status(404).json(
        {
            error: 'no envio datos o no son correctos'
        });

    }
});

// update a pet by id
router.put('/pets/:id', async (req, res) => 
{
    const { id } = req.params;
    let name = req.body.name;
    let age = req.body.age;
    let clasification = req.body.clasification;
    let race = req.body.race;
    let genre = req.body.genre;

    if(name && age && clasification && race && genre)
    {

        await Pet.update({_id: id}, {name,age,clasification,race,genre});
        res.send(name);

    }
    else
    {
        res.status(404).json(
        {
            error: 'no envio datos o no son correctos'
        });

    }
    
});
 
// delete a pet by id
router.delete('/pets/:id', async (req, res) => 
{
    let { id } = req.params;
    const pet = await Pet.findById(req.params.id);
    console.log(pet)
    if(pet)
    {
      const deleted = await Pet.remove({_id: id});
      if(deleted)
        res.json({sucess: 'se elimino el id'});
  
    }
    else
      res.status(404).json({error: 'no existe el id'});
  
});

module.exports = router;

