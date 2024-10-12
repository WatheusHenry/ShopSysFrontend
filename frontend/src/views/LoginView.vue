<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Entrar</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <InputText v-model="email" id="username" class="login-input" placeholder="Digite seu e-mail" />
        <Password v-model="password" id="password" class="login-input" placeholder="Digite sua senha" toggleMask
          :feedback="false" />
        <Button label="Login" icon="pi pi-sign-in" type="submit" class="login-button" />
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    <RouterLink to="/register" class="register-link">Registre-se</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthService } from '../services/AuthService';
import { useRouter } from 'vue-router';
import eventBus from '@/eventBus';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const { login } = useAuthService();
const router = useRouter();

const handleLogin = async () => {
  try {
    const token = await login({ email: email.value, password: password.value });
    localStorage.setItem('token', token.access_token);
    localStorage.setItem('user_id', token.user_id);
    eventBus.emit('user-logged-in');
    router.push('/dashboard');
  } catch (error) {
    errorMessage.value = "Erro ao fazer login, verifique o e-mail e a senha.";
    console.error(error.message || 'Erro ao fazer login');
  }
};
</script>

<style >
.login-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

.login-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.login-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.p-password{
  .p-inputtext{
    border: none !important;
  }
}
.login-input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.error-message {
  margin-top: 1rem;
  color: #dc3545;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #f8d7da;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #f5c2c7;
}


@media (max-width: 768px) {
  .login-card {
    padding: 1.5rem;
  }

  .login-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .login-container {
    padding: 1rem;
  }

  .login-card {
    max-width: 100%;
    padding: 1rem;
  }
}

.register-link {
  margin-top: 1rem;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s, text-shadow 0.3s;
}

.register-link:hover {
  color: #0056b3;
  text-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
