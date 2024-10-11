<template>
  <div class="register-container">
    <div class="register-card">
      <h2 class="register-title">Registro</h2>
      <form @submit.prevent="handleRegister" class="register-form">
        <InputText v-model="name" id="username" class="register-input" placeholder="Digite seu nome" />
        <InputText v-model="email" id="email" class="register-input" placeholder="Digite seu e-mail" />
        <Password v-model="password" id="password" class="register-input" placeholder="Digite sua senha" toggleMask
          :feedback="false" />
        <Password v-model="confirmPassword" id="password" class="register-input" placeholder="Confirme sua senha"
          toggleMask :feedback="false" />
        <Button label="Registrar" icon="pi pi-user-plus" type="submit" class="register-button" />
      </form>
    </div>
    <RouterLink to="/login" class="login-link">Login</RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthService } from '../services/AuthService'; 
import { useRouter } from 'vue-router';
import eventBus from '@/eventBus';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const { register } = useAuthService();
const router = useRouter();

const handleRegister = async () => {
  try {
    const token = await register({ name: name.value, email: email.value, password: password.value, password_confirmation: confirmPassword.value });
    console.log(token)
    localStorage.setItem('token', token.access_token);
    localStorage.setItem('user_id', token.user_id);
    eventBus.emit('user-logged-in'); // Emitir evento de login


    router.push('/dashboard');
  } catch (error) {
    window.alert("Erro ao fazer login, verifique o usuario e a senha")
    console.error(error.message || 'Erro ao fazer registro');
  }
};

</script>

<style scoped>
.register-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

.register-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.register-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.register-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
  text-align: left;
}

.p-password {
  .p-inputtext {
    border: none !important;
  }
}


.register-input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: border-color 0.3s;
}

@media (max-width: 768px) {
  .register-card {
    padding: 1.5rem;
  }

  .register-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .register-container {
    padding: 1rem;
  }

  .register-card {
    max-width: 100%;
    padding: 1rem;
  }
}

.login-link {
  margin-top: 1rem;
  /* Espaçamento superior */
  font-size: 1rem;
  /* Tamanho da fonte */
  color: #007bff;
  /* Cor do texto */
  text-decoration: none;
  /* Remove o sublinhado */
  font-weight: bold;
  /* Negrito */
  transition: color 0.3s, text-shadow 0.3s;
  /* Efeito de transição */
}

.login-link:hover {
  color: #0056b3;
  /* Cor do texto ao passar o mouse */
  text-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  /* Efeito de sombra ao passar o mouse */
}
</style>
