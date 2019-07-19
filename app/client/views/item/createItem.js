const createItem = Vue.component('create-item', {

  data: function () {
    return {
      item: {
        creator: '',
        title: '',
        subjects: ''
      }
    }
  },

  methods: {
    onSubmit: function(){
      fetch('/item', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.item)
      })
      .then(response => {
        return response.text();
      })
      .then(res => {
        console.log(res);
        this.item = {
          creator: '',
          title: '',
          subjects: ''
        }
      })
    }
  },

  template: `
    <form class="container border bg-light" v-on:submit.prevent="onSubmit">
      <div class = "row justify-content-center">
          <div class = "col-12">
            <div class="display-4 text-muted text-center">Create a new item</div>
            <hr>
            <div class= "row justify-content-center">
              <div class = 'form-group'
                <div class ='col-md-12'>
                  <div class = 'row'>

                    <div class = 'col-md-6'>
                      <label for="creator">Creator</label>
                      <input type="text" class="form-control mb-3" v-model="item.creator" id = "creator" name = "creator" placeholder="Type name..">

                      <label for="title">Title</label>
                      <input type="text" class="form-control mb-3" v-model="item.title" id = "title" name = "title" placeholder="Type title.. ">

                      <label for="usageClass">UsageClass</label>
                      <input type="text" class="form-control mb-3" v-model="item.usageClass" id = "usageClass" name = "usageClass" placeholder="Type usage class.. ">
                    </div>

                    <div class = 'col-md-6'>
                      <label for="checkoutType">CheckoutType</label>
                      <input type="text" class="form-control mb-3" v-model="item.checkoutType" id = "checkoutType" name = "checkoutType" placeholder="..">
    
                      <label for="materialType">MaterialType</label>
                      <input type="text" class="form-control mb-3" v-model="item.materialType" id = "materialType" name = "materialType" placeholder="..">
                      
                      <label for="publisher">Publisher</label>
                      <input type="text" class="form-control mb-3" v-model="item.publisher" id = "publisher" name = "publisher" placeholder="..">
    
                      <label for="publicationYear">PublicationYear</label>
                      <input type="text" class="form-control mb-3" v-model="item.publicationYear" id = "publicationYear" name = "publicationYear" placeholder="..">
                    </div>
                  </div>
                </div>
                <div class = 'col-md-12'>
                  <label for="checkoutYear">CheckoutYear</label>
                  <input type="text" class="form-control mb-3" v-model="item.checkoutYear" id = "checkoutYear" name = "checkoutYear" placeholder="..">

                  <label for="checkoutMonth">CheckoutMonth</label>
                  <input type="text" class="form-control mb-3" v-model="item.checkoutMonth" id = "checkoutMonth" name = "checkoutMonth" placeholder="..">

                  <label for="checkouts">Checkouts</label>
                  <input type="text" class="form-control mb-3" v-model="item.checkouts" id = "checkouts" name = "checkouts" placeholder="..">
                  
                  <label for="subjects">Few words about</label>
                  <textarea class="form-control mb-3" id="subjects" v-model="item.subjects" name="subjects" rows="3"></textarea>
                </div>
              </div>
              <button class="btn btn-primary mb-5" type="submit">Create</button>
            </div>
        </div>
      </div>
    </form>
  `
})