class AuthorController {
  constructor(model) {
    this.authors = model;
    this.limit = 20;
  }

  getAll(page, done){
    //console.log('Get authors');
    this.authors.aggregate([
     {
       $group: 
       {
         _id: "$Creator"
       }
     },
     {
       $skip: this.limit * page
     },
     {
       $limit: this.limit
     }   
    ])
    .exec(done);
  }

  getOne(name, done){
    this.authors.aggregate(
      [
        { 
          $match: 
          { 
            Creator: name
          },
        },
        {
          $group: 
          {
            _id: null,
            name: 
            {
              $first: "$Creator"
            },
            items: {
              $push: 
              {
                _id: '$_id',
                title: '$Title'
              }
            }
          }
        }
      ]
    )
    .exec(done)
  }

}

module.exports = AuthorController;