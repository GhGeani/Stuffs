class ItemController {
  constructor(itemModel) {
    this.items = itemModel;
  }

  getItems(pages, done) {
    console.log('Get Items - page=' + pages['page']);
    this.items.find({}, (err, result)=>{
      if(err) return done(err);
      return done(null, result)
    }).skip(2*pages['page']).limit(2)
  }

  // async getItems() {
  //   console.log('Get Items');
  //   const resp = await this.items.find({}).limit(5);
  //   return resp;
  // }
  
  createItem(item, done) {
    console.log('Create Item');
    new this.items(item).save(function(err){
      if(err) return done(err);
      return done(null, 'Item created!')
    })

  }

  updateItem(item, id, done) {
    console.log('Update Item');

    console.log(req.body);

  }

  deleteItem(id, done) {
    console.log('Delete Item');
  }

}

module.exports = ItemController