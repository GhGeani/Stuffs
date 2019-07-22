const routes = [
  { path: '/items', component: itemList },
  { path: '/item', component: createItem },
  { path: '/item/:id', component: getItem},
  { path: '/authors', component: authorList}
];

const router = new VueRouter({
  routes
});