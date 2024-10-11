<template>
  <Card class="sidebar">
    <template #content>
      <ul>
        <li>
          <router-link to="/dashboard">
            <i class="pi pi-home"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/sellers"> <i class="pi pi-user"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/users"> <i class="pi pi-users"></i>
          </router-link>
        </li>
        <li @click="logout"><i class="pi pi-sign-out"></i></li>
      </ul>
    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card';
import { useRouter } from 'vue-router';
import eventBus from '@/eventBus';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  eventBus.emit('user-logged-out'); // Emitir evento de logout
  router.push('/login');
};
</script>

<style scoped>
.sidebar {
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  color: rgb(248, 248, 248);
  display: flex;
  flex-direction: column;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  border-radius: 0.5rem;
  margin: 15px 0;
  padding: 0.5rem;
  color: rgb(54, 54, 54);
  display: flex;
  justify-content: center;
}

.sidebar ul li:hover {
  background: #e9e9e9;
  cursor: pointer;
}

.sidebar ul li a {
  color: rgb(54, 54, 54);
  text-decoration: none;
  font-weight: bold;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}
</style>
