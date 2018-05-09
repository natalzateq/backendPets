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

const dbConfig = require('./db');
//const dbConfig = 'mongodb://localhost/pets-dev';
//const dbConfig = require('./config/db');

// connection to db
//mongoose.connect(dbConfig)
mongoose.connect(dbConfig.DB_URL)
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

//var apiRoutes = express.Router();
//app.use(userController.authenticate());

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
