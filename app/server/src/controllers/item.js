class ItemController {
  constructor(itemModel) {
    this.items = itemModel;
    this.limit = 20;
  }

 /*  getItems(page, done) {
    this.items.aggregate([
      {
        $facet: {
            count: [
             {
              $count: "total"
             }
            ],
            data: [
                {$skip: this.limit * page},
                {$limit: this.limit}  
                ]
            }
        },
        {
          $project: 
            {
              noOfElem: { $arrayElemAt: [ "$count.total", 0 ] },
              items: "$data"
            }
        }
    ]).exec(done)
  } */

  getItems(page, done) {

    this.items.find({}, (err, results) =>{
      if(err) return done(err);
      this.items.countDocuments({}, (err, count) =>{
        if(err) return done(err);
        return done(null, { count, results })
      })
    })
   
    .skip(this.limit * page)
    .limit(this.limit)
  }

  // async getItems() {
  //   console.log('Get Items');
  //   const resp = await this.items.find({}).limit(5);
  //   return resp;
  // }

  getItem(id, done) {
    this.items.findById(id, function(err, result){
      if(err) return done(err);
      return done(null, result);
    })
  }

  getByField(field, value, page, done) {
    if (value !== null) {
      // return searchOneField(field, value, page, done);
      this.items.find({
          [field]: `${value}`
        })
        .skip(this.limit * page)
        .limit(this.limit)
        .exec(done)

    } else {
      // return searchManyFields(field, page, done);
      this.items.find(
          field
        )
        .skip(this.limit * page)
        .limit(this.limit)
        .exec(done)
    }
  }

  createItem(item, done) {
    console.log('Create Item');
    new this.items(item).save(function (err) {
      if (err) return done(err);
      return done(null, 'Item created!')
    })

  }

  updateItem(item, id, done) {
    console.log('Update Item');
    console.log(id);

    this.items.findByIdAndUpdate(id, item, function (err, res) {
      if (err) return done(err);
      return done(null, `Item with id ${id} updated.`);
    })
  }

  deleteItem(id, done) {
    console.log('Delete Item');
    this.items.findByIdAndRemove(id, function (err) {
      if (err) return done(err);
      return done(null, `Item with id ${id} deleted.`);
    })
  }

  /* searchOneField(field, value, page, done) {
    this.items.find({
        [field]: `${value}`
      })
      .skip(this.limit * page)
      .limit(this.limit)
      .exec(done)
  }

  searchManyFields(field, page, done) {
    this.items.find(
        field
      )
      .skip(this.limit * page)
      .limit(this.limit)
      .exec(done)
  } */
}


module.exports = ItemController