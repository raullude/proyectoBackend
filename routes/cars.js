const express = require('express');
const router = express.Router();
const carController = require('../app/api/controllers/cars');

router.get('/', carController.getAll);
router.post('/', carController.create);
router.get('/:carId', carController.getById);
router.get('/vin/:vin', carController.getByVin);
router.get('/make/:make',carController.getByMake);
router.get('/year/:year',carController.getByYear);
router.put('/:carId', carController.updateById);
router.delete('/:carId', carController.deleteById);


module.exports = router;