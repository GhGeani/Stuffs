Vue.component('author', {
  props: ['name'],
  template: `
    <li class="list-group-item">
      <router-link :to="{ path: '/author/' + name }">{{name}}</router-link>
    </li>
  `
})