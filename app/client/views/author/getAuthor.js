const getAuthor = Vue.component('getAuthor', 
{
  mounted: function() {
    console.log('mounted!');
    console.log(this.$route.params.name);
    fetch(`/author/${this.$route.params.name}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      this.author = response[0];
    })
  }, 
  data: function() {
    return {
      author: {}
    }
  },
  template: `
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item active">
        {{author.name}}
      </li>
      <li class="list-group-item" v-for="item in author.items" :key="author.items._id">
        <router-link :to="{ path: '/item/' + item._id, query: { edit: 'false' } }">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
  `
})