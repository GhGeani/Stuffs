const getItem = Vue.component('getItem',{
  created: function() {
    fetch(`/item/${this.$route.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.item = response;
        console.log(this.item);
      })
  },
  data: function () {
    return {
      item: {

      }
    }
  }, 
  template: 
  `
  <div class = 'row justify-content-center m-3'>
    <div class = 'card' style="width: 30rem;">
      <p class = 'text-muted text-center card-header'> {{ item.Title }} </p>
      <small class = 'text-center'><strong>by {{ item.Creator }}</strong></small>

      <p class = 'font-italic text-left card-body'> {{ item.Subjects }} </p>

      <div class = 'card-footer'>
        <div class = 'row'>

          <div class = 'col col-md-6'>
            <div><small>MaterialType: <span class = 'text-muted font-italic'>{{ item.MaterialType }} </span></small></div>
            <div><small>UsageClass: <span class = 'text-muted font-italic'>{{ item.UsageClass }} </span></small></div>
            <div><small>CheckoutType: <span class = 'text-muted font-italic'>{{ item.CheckoutType }} </span></small></div>
            <div><small>CheckoutYear: <span class = 'text-muted font-italic'>{{ item.CheckoutYear }} </span></small></div>
          </div>

          <div class = 'col col-md-6'>
            <div><small>CheckoutMonth: <span class = 'text-muted font-italic'>{{ item.CheckoutMonth }} </span></small></div>
            <div><small>Checkouts: <span class = 'text-muted font-italic'>{{ item.Checkouts }} </span></small></div>
            <div><small>Publisher: <span class = 'text-muted font-italic'>{{ item.Publisher }} </span></small></div>
            <div><small>PublicationYear: <span class = 'text-muted'>{{ item.PublicationYear }} </span></small></div>
          </div>
        
      </div>
    </div>
  </div>
  `
})