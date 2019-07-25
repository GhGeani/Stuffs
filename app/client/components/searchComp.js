const search = Vue.component('search', {
  props: [
    'path',
    'currPage',
    'query',
    'url'
  ],
  data: function() {
    return {
      search: '',
      timer: null
    }
  },

  methods: {
    keymonitor() {
      //console.log(this.search);
      this.timer = setTimeout(() => {
        if(this.search.trim() == '') {
          this.$router.push({ 
            path: this.path,
            query: {
              page: this.currPage
            }
          })
        } else {
          this.$router.push({ 
            path: this.url,
            query: {
              [this.query]: this.search
            }
          })
        }
      }, 2000)
    },
    clearT() {
      return clearTimeout(this.timer);
    }
  },

  template: `
    <div class="row">
        <input class="form-control" type="text" placeholder="Search by title.." @keyup="keymonitor" @keydown="clearT" v-model="search">
    </div>
  `
})