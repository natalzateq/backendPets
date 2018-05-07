let config =
{
   development: 
   {
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