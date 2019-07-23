class AuthorController {
  constructor(itemModel) {
    this.authors = itemModel;
    this.limit = 20;
  }

  getAll(page, done){
    //console.log('Get authors');
    this.authors.aggregate([
     /*  {
        $facet: 
        {
          "" 
        }
      },
      { 
        $skip: this.limit * page 
      },
      {
        $limit: this.limit,
      }   */    
    ])
    .exec(done);
  }

  getOne(name, page, done){
    this.authors.aggregate(
      [
        { 
          $match: 
          { 
            Creator: name
          },
        },
        {
          $project: 
          {
            _id: 1,
            Title: 1,
          }
        },
        {
          $skip: this.limit * page
        },
        {
          $limit: this.limit
        },
      ]
    )
    .exec(done)
  }

}

module.exports = AuthorController;