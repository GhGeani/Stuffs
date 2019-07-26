const authorList = Vue.component('author-list', {
  mounted: function() {
    let page =  this.$route.query.page;
    console.log(page);
    fetch(`/authors?page=${page}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response[0]);
      this.numberOf = response[0].noOfElem;
      this.authors = response[0].items;
    })
  },
  data: function() {
    return {
      authors: [ ],
      numberOf: 0,
      elementsPerPage: 20,
    }
  },
  watch: {
    '$route.query.page': function(){
      let page = this.$route.query.page;
      fetch(`/authors/?page=${page}`)
        .then((res) => { 
          return res.json() 
        })
        .then((response) => {
          this.numberOf = response[0].noOfElem;
          return this.authors = response[0].items;
        })
    }
  },
  template: `
    <div class="container">
    <search :path="'/authors'" :currPage="this.$route.query.page" :query="'Creator'" :url="'/items/search'" :placeholder="'Search by creator name'"></search>
      <div class="list-group">
        <author v-for="author in authors" :name="author._id" :key="author._id"></author>
      </div>
      <pagination :currPage="this.$route.query.page" :totalPages="Math.round(numberOf/elementsPerPage)" :path= "'/authors'"></pagination>
    </div>
  `
})