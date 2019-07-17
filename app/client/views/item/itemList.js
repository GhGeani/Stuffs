 // Template an elem.
Vue.component('item', {
  props: [
    'id', 'creator', 'title', 'subjects'
  ],

  template: `
    <div class = 'col-md-3 item card m-3' style="width: 20rem;">
      <small class ='card-header text-muted'>{{ id }}</small>
      <p class = 'text-muted text-center'> {{ title }} </p>
      <small><strong>by {{ creator }}</strong></small>
      <hr>
      <p class = 'font-italic text-left'> {{ subjects }} </p>
    </div>
  `
})

const itemList = Vue.component('item-list', {
  created: function() {
    fetch('http://localhost:3000/items/?page=1')
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
      <div class = 'row justify-content-center content'>
          <item v-for='item in items' :creator='item.Creator' :title='item.Title' :subjects='item.Subjects' :id='item._id' v-bind:key="item._id"></item>
      </div>
    </article>
  `
})