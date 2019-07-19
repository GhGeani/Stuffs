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

      //console.log(`Parametrul din query este : ${this.$route.query.edit}`);
      this.edit = this.$route.query.edit;
      console.log(this.edit);
  },
  data: function () {
    return {
      item: { },
      edit: 'false'
    }
  }, 
  methods: {
    startEdit(){
      this.edit = 'true';
      console.log(this.edit);
      this.$route.query.edit = 'true';
    },
    saveEdits() {
      this.edit = 'false';
      console.log(this.edit);
      this.$route.query.edit = 'false';
    }
  },
  template: 
  `
  <div class = 'row justify-content-center m-3'>
    <div class = 'card' style="width: 30rem;">

      <p class = 'text-muted text-center card-header' v-if="edit == 'false'"> {{ item.Title }} </p>
      <input type='text' class = 'text-muted text-center card-header' v-else="edit == 'true'" value = [item.Title] />
      
      <small class = 'text-center' v-if="edit == 'false'"><strong>by <u>{{ item.Creator }} </u></strong></small>
      <input type= 'text' class = 'text-center' value = '' v-else="edit == 'true'"/>

      <p class = 'font-italic text-left card-body' v-if="edit == 'false'"> {{ item.Subjects }} </p>
      <input type = 'text' class = 'font-italic text-left card-body' value = '' v-else="edit == 'true'" />

      <div class = 'card-footer'>
        <div class = 'row'>

          <div class = 'col col-md-6'>
          
            <div>MaterialType: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.MaterialType }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>

            <div>UsageClass: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.UsageClass }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>

            <div>CheckoutType: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.CheckoutType }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>

            <div>CheckoutYear: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.CheckoutYear }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>
            
          </div>

          <div class = 'col col-md-6'>

            <div>CheckoutMonth: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.CheckoutMonth }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>

            <div>Checkouts: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.Checkouts }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>

            <div>Publisher: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.Publisher }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>

            <div>PublicationYear: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.PublicationYear }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" value = '' />
            </div>
          </div>
        
      </div>
      <div class = 'row'>
        <input class = 'btn btn-sm btn-edit mt-4' @click='startEdit' v-if="edit == 'false'" value="Edit">
        <input class = 'btn btn-sm btn-edit mt-4' @click='saveEdits' v-else="edit == 'true'" value="Save">
      </div>
    </div>
  </div>
  </div>
  `
})