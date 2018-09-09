 const mongoose = require('mongoose');
 const vegetablesSchema = new mongoose.Schema({
    name : String,
    cost : Number,
    protien : String,

 })
 //schema(blueprint) matlab architect and uska ek model(bulding itself) bana hai
 //mongoose.model(Vegetable,vegetablesSchema)//model ban gaya
 module.exports = mongoose.model('Vegetable',vegetablesSchema);