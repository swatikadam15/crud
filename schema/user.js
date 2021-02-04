var mongoose = require('mongoose');
var Schema = mongoose.Schema,

ObjectId = Schema.ObjectId;
var myuser = new Schema({
product_name :String
});
module.exports = mongoose.model('users', myuser);