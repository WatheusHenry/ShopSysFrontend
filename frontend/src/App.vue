<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import SidebarComponent from './components/SidebarComponent.vue';
import eventBus from './eventBus';

const isAuthenticated = ref(!!localStorage.getItem('token'));

const updateAuthState = () => {
    isAuthenticated.value = !!localStorage.getItem('token');
};

onMounted(() => {
    eventBus.on('user-logged-in', updateAuthState);
    eventBus.on('user-logged-out', updateAuthState);
});

onUnmounted(() => {
    eventBus.off('user-logged-in', updateAuthState);
    eventBus.off('user-logged-out', updateAuthState);
});
</script>

<template>
    <section class="body">
        <SidebarComponent v-if="isAuthenticated" />
        <RouterView />
    </section>
</template>

<style>
.body {
    display: flex;
}
</style>
