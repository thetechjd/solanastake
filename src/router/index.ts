import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Stake from '@/views/Farmer.vue';
import Manager from '@/views/Manager.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/manager',
    name: 'Farm Manager',
    component: Manager,
  },
  {
    path: '/stake',
    name: 'Stake',
    component: Stake,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
