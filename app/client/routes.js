const routes = [
  { path: '/', component: itemList },
  { path: '/item/create', component: createItem },
  { path: '/item/show', component: getItem},
];

const router = new VueRouter({
  routes
});