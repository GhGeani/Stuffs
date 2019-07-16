const router = require('express').Router();
const ItemController = require('../controllers/item');
const itemModel = require('../model/item');

let itemController = new ItemController(itemModel);

router.get('/items', (req, res) => {
  let page = req.query['page'];
  itemController.getItems(page, function (err, listOfItems) {
    if (err) return res.status(500).send(JSON.stringify(err));
    res.status(200).send(listOfItems);
  });
})

router.get('/items/search', (req, res) => {
  let field = req.query['field'];
  let values = req.query['value'].split(',');
  let page = req.query['page'];

  if (field.search(',') == -1) {
    //return query for a single value 
    return getByField(field, values[0], page)
  } else {
    //field is an OBJECT type. 
    let fields = field.split(',');
    let query = {};
    //console.log(fields);
    for (value in fields) {
      if (values[value] !== undefined) {
        //creating query here.
        query[fields[value]] = values[value];
      } else {
        return getByField(query, null, page);
      }
    }
    return getByField(query, null, page);
  }

  function getByField(field, value, page) {
    return itemController.getByField(field, value, page, function (err, result) {
      if (err) return res.status(500).send(JSON.stringify(err));
      return res.status(200).send(result);
    })
  }
})

router.post('/item/create', (req, res) => {
  let item = req.body;

  itemController.createItem(item, function (err, result) {
    if (err) return res.status(500).send(JSON.stringify(err));
    res.status(201).send(result);
  })
})

router.put('/update/:id', (req, res) => {
  // console.log(req.body);
  // console.log(req.params['id']);
  itemController.updateItem(req.body, req.params['id'], function (err, result) {
    if (err) return res.status(500).send(JSON.stringify(err));
    return res.status(201).send(result);
  })
})

router.delete('/delete/:id', (req, res) => {
  itemController.deleteItem(req.params['id'], function (err, result) {
    if (err) return res.status(500).send(JSON.stringify(err));
    return res.status(200).send(result);
  })
})


module.exports = router;