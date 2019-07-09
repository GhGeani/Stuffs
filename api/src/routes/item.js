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

router.get('/search/:field/:id/:page', (req, res) => {
  let field = req.params['field'];
  let id = req.params['id'];
  let page = req.params['page'];
  console.log(req.params);

  itemController.getByField(field, id, page, function(err, result){
    if(err) return res.status(500).send(JSON.stringify(err));
    return res.status(200).send(result);
  })
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
  // console.log(req.params['id']);
  itemController.updateItem(req.body, req.params['id'], function(err, result) {
    if(err) return res.status(500).send(JSON.stringify(err));
    return res.status(201).send(result);
  })
})

router.delete('/delete/:id', (req, res) => {
  itemController.deleteItem(req.params['id'], function(err, result){
    if(err) return res.status(500).send(JSON.stringify(err));
    return res.status(200).send(result);
  })
})

module.exports = router;