Vue.component('getItem',
{


  template: 
  `
  <div class = 'row'>
    <div class = 'col-md-3 item card m-3' style="width: 20rem;">
      <p class = 'text-muted text-center'> {{ title }} </p>
      <small><strong>by {{ creator }}</strong></small>
      <hr>
      <p class = 'font-italic text-left'> {{ subjects }} </p>
    </div>
  </div>
  `
})