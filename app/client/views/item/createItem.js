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
      console.log(this.item);
      axios.post('/item/create', this.item)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.item = {
        creator: '',
        title: '',
        subjects: ''
      };
    }
  },

  template: `
    <form class="container border bg-light" v-on:submit.prevent="onSubmit">
      <div class = "row justify-content-center">
          <div class = "col-12">
            <div class="display-4 text-muted text-center">Create a new item</div>
            <hr>

            <div class = 'form-group'
            <label for="creator">Creator</label>
            <input type="text" class="form-control mb-3" v-model="item.creator" id = "creator" name = "creator" placeholder="Type name..">

            <label for="title">Title</label>
            <input type="text" class="form-control mb-3" v-model="item.title" id = "title" name = "title" placeholder="Type title.. ">

            <label for="subjects">Few words about</label>
            <textarea class="form-control mb-3" id="subjects" v-model="item.subjects" name="subjects" rows="3"></textarea>
            </div>
            <button class="btn btn-primary mb-5" type="submit">Create</button>
        </div>
      </div>
    </form>
  `
})