const {Schema, model} = require('../connection');

const myschema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    problem:String
});

module.exports = model('contact',myschema);