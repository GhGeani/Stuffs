const router = require('express').Router();
const ItemController = require('../controllers/item');
const itemModel = require('../model/item');

let itemController = new ItemController(itemModel);

router.get('/:page', (req, res) => {
  itemController.getItems(req.params, function(err, listOfItems) {
    if(err) return res.status(500).send(JSON.stringify(err));
    res.status(200).send(listOfItems);
  });
})

router.post('/', (req, res) => {
  let item = req.body;

  itemController.createItem(item, function(err, result){
    if(err) return res.status(500).send(JSON.stringify(err));
    res.status(201).send(result);
  })
})

router.put('/update/:id', (req, res) => {
  // console.log(req.body);
  itemController.updateItem(req.body, req.params, function(err, res) {
    if(err) return res.status(500).send(JSON.stringify(err));
    return res.status(201).send(res);
  })
})

router.delete('/delete/:id', (req, res) => {
  res.status(200).send(itemController.deleteItem());
})

module.exports = router;