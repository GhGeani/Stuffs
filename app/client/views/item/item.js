Vue.component('item', {
  props: [
    'id', 'creator', 'title', 'subjects'
  ],

  template: `
  <div class="col col-sm-12 col-md-6 col-lg-4">
    <div class = "item card m-1">
      <div class = 'card-header'>
        <p class = 'text-muted text-center'> {{ title }} </p>
        <small><strong>by <u>{{ creator }}</u></strong></small>
      </div>
      <p class = 'card-body text-truncate'> {{ subjects }} </p>
      <router-link class ='btn btn-sm btn-get-more' :to="{ path: 'item/' + id , query: { edit: 'false' } }">Get more</router-link>
      <router-link class ='btn btn-sm btn-edit' :to="{ path: 'item/' + id, query: { edit: 'true' } }">Edit</router-link>
      <input type = 'button' class ='btn btn-sm btn-del' :id = id @click="remove" value='Delete' />
    </div>
  </div>
  `,

  methods: {
    remove() {
      let button = document.getElementById(this.id);
      button.classList.remove('btn-del');
      button.classList.add('confirm-delete');
      button.value = 'Are you sure you want this?';
      button.addEventListener('click', ()=>{
        fetch(`/item/${this.id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        })
        .then(res => {
          return res.text();
        })
        .then(res => {
          console.log(res);
          this.$parent.$emit('item:remove', this.id);
        })
      })
    }
  }
}) 