const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
})


module.exports = mongoose.model('pet', petSchema);
