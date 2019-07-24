const authorList = Vue.component('author-list', {
  mounted: function() {
    let page =  this.$route.query.page;
    console.log(page);
    fetch(`/authors?page=${page}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.authors = response;
      console.log(this.authors);
    })
  },
  data: function() {
    return {
      authors: [ ]
    }
  },
  template: `
    <div class="container">
      <div class="list-group">
        <author v-for="author in authors" :name="author._id" :key="author._id"></author>
      </div>
    </div>
  `
})