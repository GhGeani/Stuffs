class ItemController {
  constructor(itemModel) {
    this.items = itemModel;
  }

  getItems() {
    console.log('Get Items');
    this.items.find({}, (err, result)=>{
      if(err) return err;
      return result
    }).limit(5);
  }
  
  createItem(item) {
    console.log('Create Item');
  }

  updateItem(item, id) {
    console.log('Update Item');
  }

  deleteItem(id) {
    console.log('Delete Item');
  }

}

module.exports = ItemController