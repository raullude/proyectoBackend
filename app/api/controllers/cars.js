const carModel = require('../models/cars');

module.exports = {
 getByVin: function(req, res, next) {
  console.log(req.body);
  carModel.find({vin: req.params.vin}, function(err, carInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Car found!!!", data:{cars: carInfo}});
   }
  });
 },

 getById: function(req, res, next) {
  console.log(req.body);
  carModel.findById(req.params.carId, function(err, carInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Car found!!!", data:{cars: carInfo}});
   }
  });
 },

getAll: function(req, res, next) {
  let carsList = [];

carModel.find({}, function(err, cars){
   if (err){
    next(err);
   } else{
    for (let car of cars) {
     carsList.push({id: car._id, vin: car.vin, make: car.make, model: car.model, year: car.year});
    }
    res.json({status:"success", message: "Cars list found!!!", data:{cars: carsList}});
       
   }

});
 },

 getByMake: function(req, res, next){
  let carsMakeList = [];

  carModel.find({make: req.params.make}, function(err,cars){
    if (err){
      next(err);
     } else{
      for (let car of cars) {
        carsMakeList.push({id: car._id, vin: car.vin, make: car.make, model: car.model, year: car.year});
       }
       res.json({status:"success", message: "Cars list found!!!", data:{cars: carsMakeList}});
     }

  });


 },

 getByYear: function(req, res, next){
  let carsMakeList = [];

  carModel.find({year: req.params.year}, function(err,cars){
    if (err){
      next(err);
     } else{
      for (let car of cars) {
        carsMakeList.push({id: car._id, vin: car.vin, make: car.make, model: car.model, year: car.year});
       }
       res.json({status:"success", message: "Cars list found!!!", data:{cars: carsMakeList}});
     }

  });


 },

updateById: function(req, res, next) {
  carModel.findByIdAndUpdate(req.params.carId,{make: req.body.make}, function(err, carInfo){

if(err)
    next(err);
   else {
    res.json({status:"success", message: "Car updated successfully!!!", data:null});
   }
  });
 },

deleteById: function(req, res, next) {
  carModel.findByIdAndRemove(req.params.carId, function(err, carInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Car deleted successfully!!!", data:null});
   }
  });
 },

create: function(req, res, next) {
  carModel.create({ vin: req.body.vin, make: req.body.make, model: req.body.model, year: req.body.year }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Car added successfully!!!", data: null});
      
    });
 },

}