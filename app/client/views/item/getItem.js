const getItem = Vue.component('getItem',{
  mounted: function() {
    console.log('mounted!');
    fetch(`/item/${this.$route.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.item = response;
        //console.log(this.item);
      })

      //console.log(`Parametrul din query este : ${this.$route.query.edit}`);
      if(typeof this.$route.query.edit != undefined) {
        this.edit = this.$route.query.edit;
      }
      console.log('Se editeaza:' + this.edit);
  },
  data: function () {
    return {
      item: { },
      edit: ''
    }
  },
  methods: {
    updateItem() {
      fetch(`/item/${this.$route.params.id}`, {
        method: 'PUT',
        body: JSON.stringify(this.item),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.text();
      })
      .then(response => {
        console.log(response);
      })

      this.edit = false;
      this.$router.push({ path: '' + this.item._id, query: { edit: 'false' } });
    }
  },
  watch: {
    '$route.query.edit': function(editVal) {
      if(editVal == 'true') this.edit = 'true'
      else this.edit = 'false'
    }
  },
  template: 
  `
  <div class = 'row justify-content-center m-3'>
    <div class = 'card' style="width: 30rem;">

      <p class = 'text-muted text-center card-header' v-if="edit == 'false'"> {{ item.Title }} </p>
      <textarea rows= '3' type='text' class = 'text-muted text-center card-header' v-else="edit == 'true'" v-model="item.Title"></textarea>
      
      <small class = 'text-center' v-if="edit == 'false'"><strong>by <u>{{ item.Creator }} </u></strong></small>
      <textarea rows= '2' type= 'text' class = 'text-center' v-model="item.Creator" v-else="edit == 'true'"></textarea>

      <p class = 'font-italic text-left card-body' v-if="edit == 'false'"> {{ item.Subjects }} </p>
      <textarea rows= '3' type = 'text' class = 'font-italic text-left card-body' v-model="item.Subjects" v-else="edit == 'true'" ></textarea>

      <div class = 'card-footer'>
        <div class = 'row'>

          <div class = 'col col-md-6'>
          
            <div>MaterialType: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.MaterialType }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.MaterialType" />
            </div>

            <div>UsageClass: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.UsageClass }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.UsageClass" />
            </div>

            <div>CheckoutType: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.CheckoutType }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.CheckoutType" />
            </div>

            <div>CheckoutYear: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.CheckoutYear }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.CheckoutYear" />
            </div>
            
          </div>

          <div class = 'col col-md-6'>

            <div>CheckoutMonth: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.CheckoutMonth }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.CheckoutMonth" />
            </div>

            <div>Checkouts: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.Checkouts }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.Checkouts" />
            </div>

            <div>Publisher: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.Publisher }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.Publisher" />
            </div>

            <div>PublicationYear: 
              <span class = 'text-muted font-italic' v-if="edit == 'false'">{{ item.PublicationYear }} </span>
              <input type = 'text' class = 'text-muted font-italic' v-else="edit == 'true'" v-model="item.PublicationYear" />
            </div>
          </div>
        
      </div>
      <div class = 'row float-right mt-1'>
      <router-link class ='btn btn-sm btn-get-more' :to="{ path: '' + item._id, query: { edit: 'true' } }" v-if="edit == 'false'">Edit</router-link>
      <button class ='btn btn-sm btn-edit' v-if="edit == 'true'" @click='updateItem'>Save Changes</button>
      <router-link class ='btn btn-sm btn-del float-right' :to="{ path: '' + item._id, query: { edit: 'false' } }" v-if="edit == 'true'">Cancel</router-link>
      </div>
    </div>
  </div>
  </div>
  `
})