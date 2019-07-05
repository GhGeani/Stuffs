const router = require('express').Router();
const ItemController = require('../controllers/item');

let itemController = new ItemController();

router.get('/', (req, res) => {
  res.status(200).send(itemController.getItems());
})
router.post('/create', (req, res) => {
  res.status(201).send(itemController.createItem());
})
router.put('/update', (req, res) => {
  res.status(201).send(itemController.updateItem());
})
router.delete('/delete', (req, res) => {
  res.status(200).send(itemController.deleteItem());
})

module.exports = router;