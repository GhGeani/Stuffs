const routes = [
  { path: '/items', component: itemList },
  { path: '/item', component: createItem },
  { path: '/item/:id', component: getItem},
];

const router = new VueRouter({
  routes
});