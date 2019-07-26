class AuthorController {
  constructor(model) {
    this.authors = model;
    this.limit = 20;
  }

  getAll(page, done){
    this.authors.aggregate(
      [
        {
          $facet: 
          {
            count: 
            [
              {
                $group:
                {
                  _id: "$Creator"
                }
              },
              {
                $group:
                {
                  _id: null,
                  count: { $sum: 1 }
                }
              }
            ],
            data:
            [
              {
                $group: 
                {
                _id: "$Creator",
                }
              },
              {
                $skip: this.limit * page
              },
              {
                $limit: this.limit
              }
            ]
          }
        },
        {
          $project:
          {
            noOfElem: {$arrayElemAt: ["$count.count", 0]},
            items: "$data"
          }
        }
      ]
    )
    .exec(done)
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