const publisherList = Vue.component('publisherList', 
{
  mounted: function() {

  },
  data: function(){
    return{
      publishers: []
    }
  },
  template:`
    <ul class="list-group">
      <publisher v-for="publisher in publishers"></publisher>
    </ul>
  `
})