class AuthorController {
  constructor(itemModel) {
    this.authors = itemModel;
    this.limit = 20;
  }

  getAll(page, done){
    //console.log('Get authors');

    this.authors.aggregate([
    {
      $group: {
        _id: "$Creator",
      },

    }
    ])
    .skip(this.limit * page)
    .limit(this.limit)
    .exec(done);
  }

  getOne(){
    console.log('Get author');
  }

}

module.exports = AuthorController;