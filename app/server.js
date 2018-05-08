const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//const jwt = require('jsonwebtoken');
const jwt = require('express-jwt');

const app = express();

//const routes = require('./routes/routes');
const petController = require('./controllers/pet.controller');
const userController = require('./controllers/user.controller');

//const dbConfig = require('./config/db');
const dbConfig = 'mongodb://localhost/pets-dev';
// connection to db
mongoose.connect(dbConfig)
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));


  // settings
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());
//app.use('/',routes);
app.use(userController);
app.use(petController);

//routes
//require('./routes/routes')(app);

if(require.main == module) 
{
    app.listen(app.get('port'), () => {

      console.log(`[+] listening at port ${app.get('port')}`);
    });
}
else 
{
    module.exports = app;
}
