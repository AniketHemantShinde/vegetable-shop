const Vegetable = require('../models/Vegetables')
exports.getAllVegetables = function (req, res) {
    Vegetable.find().exec(function (err, Vegetables) {
        if (err) {

        }
        if (Vegetables) {
            res.json({  //json will send the object in json format
                data: Vegetables
            });
        }
        else {
            res.json({
                message: 'nodata',
            })
        }
    })
}

exports.postCreateVegetable = function (req, res) {
    console.log(req.body);
    var vegetable = new Vegetable({
        name: req.body.name,
        cost : req.body.cost,
        protien : req.body.protien,
    }) 
    vegetable.save().then(function(newVegetable){//then kab use karte hai jab resolve karte hai
        res.json({
            data : req.body,
        })
        
    })
 
}