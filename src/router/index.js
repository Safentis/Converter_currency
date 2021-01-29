import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Converter',

    component: () => import('../views/Converter.vue'),
  },
  {
    path: '/briefcase',
    name: 'Briefcase',
    
    component: () => import('../views/Briefcase.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
