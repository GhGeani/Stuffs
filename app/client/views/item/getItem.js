const getItem = Vue.component('getItem',{
  data: function () {
    return {
      item: {

      }
    }
  },

  template: 
  `
  <div class = 'row'>
    <div class = 'card col-md-5 col-lg-3 item m-3' style="width: 20rem;">
      <p class = 'text-muted text-center'> {{ item.title }} </p>
      <small><strong>by {{ item.creator }}</strong></small>
      <hr>
      <p class = 'font-italic text-left'> {{ item.subjects }} </p>
    </div>
  </div>
  `
})