const router = require('express').Router();
const itemModel = require('../model/item');
const AuthorController = require('../controllers/author');

const authorController = new AuthorController(itemModel);


router.get('/authors', (req, res) => {
  let page = req.query.page;
  authorController.getAll(page, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(result);
  })
})

router.get('/author/:name', (req, res) => {
  let name = req.params.name;
  authorController.getOne(name, (err, result) => {
    if(err) return res.status(500).send(err);
    return res.status(200).send(result);
  });
})

module.exports = router;