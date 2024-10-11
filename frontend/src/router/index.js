import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';

const routes = [
  {
    path: '/', redirect: to => {
      const token = localStorage.getItem('token');
      return token ? '/dashboard' : '/login'; 
    }
  },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/dashboard', name: 'dashboard', component: HomeView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    next('/login'); 
  } else if ((to.path === '/login' || to.path === '/register') && token) {
    next('/dashboard'); 
  } else {
    next(); 
  }
});

export default router;
