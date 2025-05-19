import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import State from '../views/StateManagementView.vue';
import Action from '../views/UserActionView.vue';
import UI from '../views/UiControl.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/state', component: State },
  { path: '/action', component: Action },
  { path: '/ui', component: UI },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
