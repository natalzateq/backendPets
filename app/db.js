let config =
{
   development: 
   {   
        'serverport':3000,
        'tokenexp': 3600,
        'secret': 'mysecretkey',
        DB_URL: "mongodb://localhost/pets-dev"
   },
   staging: 
   {
       DB_URL: "mongodb://localhost/pets-stg"
   },
   production: 
   {
       DB_URL: "mongodb://localhost/pets"
   }


}

module.exports = config[process.env.NODE_ENV || 'development'];

// module.exports = {
//     'serverport':1978,
//     'tokenexp': 3600,
//     'secret': 'mysecretkey',
//     DB_URL: 'mongodb://localhost/pets-dev'
//  };