const search = Vue.component('search', {
  props: [
    'path',
    'currPage',
    'query',
    'url'
  ],
  data: function() {
    return {
      search: ''
    }
  },

  methods: {
    keymonitor() {
      //console.log(this.search);
      if(this.search.trim() == '') {
        router.push({ 
          path: this.path,
          query: {
            page: this.currPage
          }
        })
      } else {
        router.push({ 
          path: this.url,
          query: {
            [this.query]: this.search
          }
        })
      }
    }
  },

  template: `
    <div class="row">
        <input class="form-control" type="text" placeholder="Search by title.." v-on:keyup="keymonitor" v-model="search">
    </div>
  `
})