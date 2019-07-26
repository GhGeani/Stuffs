const itemList = Vue.component('item-list', {
  created: function() {
    this.$on('item:remove', (id)=> {
      console.log(id);
      let index = this.items.findIndex((item) => {
        return item._id === id;
      })
      this.items.splice(index, 1);
    })

    let page = this.$route.query.page;
    fetch(`/items/?page=${page}`)
      .then((res) => { 
        return res.json() 
      })
      .then((jsonData) => {
        console.log(jsonData)
        this.noOfElem = jsonData.count;
        return this.items = jsonData.results;
      })
  },
  data: function() {
    return {
      items: [],
      noOfElem: 0,
      elemPerPage: 20
    }
  },
  watch: {
    '$route.query.page': function(){
      let page = this.$route.query.page;
      fetch(`/items/?page=${page}`)
        .then((res) => { 
          return res.json() 
        })
        .then((jsonData) => {
          return this.items = jsonData.results;
        })
    }
  },
  template: `
    <article class = 'container'>
      <div class="row">
       <!--  <div class="col col-md-3">
          <filter-comp ></filter-comp>
        </div> -->
        <div class="col">
          <search :path="'/items'" :currPage="this.$route.query.page" :query="'Title'" :url="'/items/search'" :placeholder="'Search by title'"></search>
          <div class = 'row justify-content-around  content'>
            <item v-for='item in items' :creator='item.Creator' :title='item.Title' :subjects='item.Subjects' :id='item._id' v-bind:key="item._id"></item>
          </div>
          <pagination :currPage="this.$route.query.page" :totalPages="Math.ceil(noOfElem/elemPerPage)" :path="'/items'"></pagination>
        </div>
      </div>
    </article>
      
  `
})