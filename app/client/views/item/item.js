Vue.component('item', {
  props: [
    'id', 'creator', 'title', 'subjects'
  ],

  template: `
  <div class = "item card col-md-5 col-lg-3 m-3">
    <div class = 'card-header'>
      <p class = 'text-muted text-center'> {{ title }} </p>
      <small><strong>by <u>{{ creator }}</u></strong></small>
    </div>
    <p class = 'card-body text-truncate'> {{ subjects }} </p>
    <router-link class ='btn btn-sm btn-get-more' :to="{ path: 'item/' + id , query: { edit: 'false' } }">Get more</router-link>
    <router-link class ='btn btn-sm btn-edit' :to="{ path: 'item/' + id, query: { edit: 'true' } }">Edit</router-link>
    <button class ='btn btn-sm btn-del' @click="remove">Delete</button>
  </div>
  `,

  methods: {
    remove() {
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
    }
  }
}) 