
//Including the required packages and assigning it to Local Variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


//Creating EmployeeSchema 
const EmployeeSchema = new Schema({
    id : String,
    username : String,
    fullname : String,
    address : String,
    city : String,
    mobile : String,
    email:String,
    password : String
});

//Function to handleEvent of password modification 
EmployeeSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();
  
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);
    
    user.password = hash;
    next();
  });
});

//Function to check if modified and saved passwords match 
EmployeeSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


//Function to Use gravatar Service for image Sizes 
EmployeeSchema.methods.gravatar = function(size) {
  if (!this.size) size = 200;
  if (!this.email) {
    return 'https://gravatar.com/avatar/?s' + size + '&d=retro';
  } else {
    var md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return 'https://gravatar.com/avatar/' + md5 + '?s' + size + '&d=retro'; 
  }

}

//Exporting the Review schema to reuse
module.exports = mongoose.model('Employer', EmployeeSchema);