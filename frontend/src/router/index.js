import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import State from '../views/StateManagementView.vue';
import Action from '../views/UserActionView.vue';
import UI from '../views/UiControl.vue';
import LifeCycle from '../views/LifeCycle.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/state', component: State },
  { path: '/action', component: Action },
  { path: '/ui', component: UI },
  { path: '/lifecycle', component: LifeCycle },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
