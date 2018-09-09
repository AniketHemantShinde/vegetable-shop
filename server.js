const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const vegetableController = require('./controller/vegetable');
mongoose.connect('mongodb://localhost:27017/vegetableShop');
mongoose.connection.on('err',function(){
    console.log('error in mongo connection');
})
mongoose.connection.on('open',function(){
    console.log('connected to mongo');
})


const app = express();
app.use(bodyParser.json());//sab json format mai transfer hoga isileye we are enabling json
app.use(bodyParser.urlencoded({//urlencoded likha hai so that jo bhi hum query string pass kare vo use padh sakhe
    extends: true,
}
));

app.get('/',function(req,res){
    res.send("Hello world");
})
app.get('/api/vegetables',vegetableController.getAllVegetables);
app.post('/api/vegetables',vegetableController.postCreateVegetable);

app.set('port',5000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
});