const router = require('express').Router();
const itemModel = require('../model/item');
const PublisherController = require('../controllers/publisher');
const publisherController = new PublisherController(itemModel);

router.get('/publishers', (req, res) => {

})
router.get('/publisher', (req, res) => {
  
})

module.exports = router;