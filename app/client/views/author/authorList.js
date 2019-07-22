const authorList = Vue.component('author-list', {
  mounted: function() {

  },
  data: function() {
    return {
      authors: [
        {
          name: 'Alex'
        },
        {
          name: 'Alex'
        },
        {
          name: 'Alex'
        },
      ]
    }
  },
  template: `
    <div class="list-group">
      <author v-for="author in authors" :name="author.name"></author>
    </div>
  `
})