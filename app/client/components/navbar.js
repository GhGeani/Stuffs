Vue.component('nav-bar', {

  template: `
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" to="/items">List Of Items</router-link>
    <ul class="navbar-nav float-right">
      <li class="nav-item">
        <router-link to="/item" class="nav-link">Create</router-link>
      </li>
    </ul>
</nav>
  `
})