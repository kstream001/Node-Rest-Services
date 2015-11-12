//get a instanced of mongooes and mongooes Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// set up a mongooes model and pass it using module exports

module.exports = mongoose.model('User', new Schema({
	name: String,
	password: String,
	admin: Boolean
}));


exports.register = function(req, res) {
	console.log(req.body);
	res.json({success:true});
    /*db.collection('users', function(err, collection) {
       // collection.find().toArray(function(err, items) {
       //     res.send(items);
       collection.insert(wines, {safe:true}, function(err, result) {});
        });
    });*/
};



