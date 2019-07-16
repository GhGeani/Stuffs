const routes = [
  { path: '/', component: itemList },
  { path: '/item/create', component: createItem },
];

const router = new VueRouter({
  routes
});