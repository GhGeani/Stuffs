const authorList = Vue.component('author-list', {
  mounted: function() {
    fetch('/authors?page=1')
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.authors = response;
    })
  },
  data: function() {
    return {
      authors: [ ]
    }
  },
  template: `
    <div class="list-group">
      <author v-for="author in authors" :name="author._id"></author>
    </div>
  `
})