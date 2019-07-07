const router = require('express').Router();
const ItemController = require('../controllers/item');
const itemModel = require('../model/item');

let itemController = new ItemController(itemModel);

router.get('/', (req, res) => {
  let listofItems = itemController.getItems();
  console.log(listofItems);
  
  res.status(200).send(listofItems);
})

router.post('/create/:id', (req, res) => {
  res.status(201).send(itemController.createItem());
})

router.put('/update/:id', (req, res) => {
  res.status(201).send(itemController.updateItem());
})

router.delete('/delete/:id', (req, res) => {
  res.status(200).send(itemController.deleteItem());
})

module.exports = router;