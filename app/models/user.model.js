const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const id= mongoose.Schema.ObjectId;
const bcrypt = require('bcrypt-nodejs');
//import update from 'mongoose-patch-update';

const userSchema = new Schema(
{
    //_id: new mongoose.Types.ObjectId(),
    //_id: new id(),

    firstName: 
    {
        type: String,
        required: true
    },
    lastName: 
    {
        type: String,
        required: true
    },
    
    documentType: 
    {
        type: String,
        required: true
    },
    documentNumber: 
    {
        type: String,
        required: true
    },
    genre: 
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true,
        unique: true
    },
    password: 
    {
        type: String,
        required: true
    },
    
})

// Pre-save of user's hash password to database
userSchema.pre('save', function (next) {

    const users = this,
      SALT_FACTOR = 5;
  
    if (!users.isModified('password')) return next();
  
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) return next(err);
  
      bcrypt.hash(users.password, salt, null, (err, hash) => {
        if (err) return next(err);
        users.password = hash;
        next();
      });
    });
  });
  
  // Method to compare password for login
  userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) { return cb(err); }
  
      cb(null, isMatch);
    });
  };

  userSchema.methods = {
    async verifyPassword(password) {
      const res = await Q.nbind(bcrypt.compare, bcrypt)(password, this.password);
      return res;
    },
  };

  userSchema.statics.create = function createUser(data) {
    return new this(data).save();
  };
  
  userSchema.statics.update = function updateUser(query, data) {
    return this.patchUpdate(query, data);
  };
  
  userSchema.statics.delete = function deleteUser(query) {
    return this.patchUpdate(query, { status: 'disabled' });
  };
  
  //userSchema.plugin(update);
  //userSchema.plugin(require('mongoose-private-paths'));
  //userSchema.plugin(require('mongoose-patch-update'));

module.exports = mongoose.model('user', userSchema);
