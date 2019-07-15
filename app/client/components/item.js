 // Template an elem.
Vue.component('item', {
  props: [
    'creator', 'title', 'subjects'
  ],

  template: `
    <div class = 'card border border-dark m-3' style="width: 20rem;">
      <p class = 'text-muted text-center'> {{ title }} </p>
      <small><strong>by {{ creator }}</strong></small>
      <hr>
      <p class = 'font-italic text-left'> {{ subjects }} </p>
    </div>
  `
})

const itemList = Vue.component('item-list', {
  mounted: function() {
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
    <article class = 'row border justify-content-center'>
      <item class = 'col-3' v-for='item in items' :creator='item.Creator' :title='item.Title' :subjects='item.Subjects'></item>
    </article>
  `
})