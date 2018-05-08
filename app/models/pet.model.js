const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user.model');

//user= new userSchema;

const petSchema = new Schema(
{
    name: String,
    age: Number,
    clasification: 
    {
        type: String,
        enum: ['cat', 'dog'],
        required: true
        //default: 'dog'   
    },
    race: 
    {
        type: String,
        required: true
        //default: 'no_race'
    },
    genre: 
    {
        type: String,
        required: true
        //default: 'female'
    },
    user_id: 
    { 
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'user'
    },
    
    
}, { strict: true })


module.exports = mongoose.model('pet', petSchema);
