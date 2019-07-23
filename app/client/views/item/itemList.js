const itemList = Vue.component('item-list', {
  created: function() {
    this.$on('item:remove', (id)=> {
      console.log(id);
      let index = this.items.findIndex((item) => {
        return item._id === id;
      })
      this.items.splice(index, 1);
    })
    fetch('/items/?page=1')
      .then((res) => { 
        return res.json() 
      })
      .then((jsonData) => {
        return this.items = jsonData;
      })
  },
  data: function() {
    return {
      items: [

      ]
    }
  },
  template: `
    <article class = 'container'>
      <div class="row">
       <!--  <div class="col col-md-3">
          <filter-comp></filter-comp>
        </div> -->
        <div class="col">
          <search></search>
          <div class = 'row justify-content-around  content'>
            <item v-for='item in items' :creator='item.Creator' :title='item.Title' :subjects='item.Subjects' :id='item._id' v-bind:key="item._id"></item>
          </div>
        </div>
      </div>
    </article>
      
  `
})