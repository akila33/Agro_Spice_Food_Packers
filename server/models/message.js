
//Including the required packages and assigning it to Local Variables
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating MessageSchema 
const MessageSchema = new Schema({
    sender : String,
    reciever : String,
    message : String
});


//Exporting the Review schema to reuse
module.exports = mongoose.model('Message', MessageSchema);