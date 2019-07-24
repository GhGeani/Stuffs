const itemSearch = Vue.component('itemSearch', 
{
  data: function() {
    return {
      items: [],
      queryKeys: '',
      values: ''
    }
  },
  watch: {
    '$route.query': function() {
      this.queryKeys = Object.keys(this.$route.query)[0];
      this.values = Object.values(this.$route.query)[0];
      console.log(`Query: /items/search?${this.queryKeys}=${this.values}`);
      fetch(`/items/search?field=${this.queryKeys}&value=${this.values}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        return this.items = response;
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
        <search :path="'/items'" :currPage="1" :query="'Title'" :url="'/items/search'" ></search>
        <div class = 'row justify-content-around  content'>
          <item v-for='item in items' :creator='item.Creator' :title='item.Title' :subjects='item.Subjects' :id='item._id' v-bind:key="item._id"></item>
        </div>
      </div>
    </div>
  </article>
  `
})