const routes = [
  { path: '/items', component: itemList },
  { path: '/items/search', component: itemSearch },
  { path: '/item', component: createItem },
  { path: '/item/:id', component: getItem},
  { path: '/authors', component: authorList},
  { path: '/publishers', component: publisherList},
  { path: '/author/:name', component: getAuthor }
];

const router = new VueRouter({
  routes
});