<template>
  <section class="view">
    <header>
      <h1>Vendedores</h1>
    </header>
    <Dialog v-model:visible="isEditing" header="Editar Usuário" :modal="true" :closable="false" :draggable="false"
      class="edit-dialog">
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" @click="cancelEdit" class="cancel-button" />
        <Button :label="isEditing ? 'Atualizar' : 'Adicionar'" icon="pi pi-check" @click="handleSubmit"
          class="submit-button" />
      </template>
      <form class="user-form">
        <InputText v-model="user.name" type="text" placeholder="Nome" class="user-input" required />
        <InputText v-model="user.email" type="email" placeholder="E-mail" class="user-input" required />
      </form>
    </Dialog>

    <Card class="user-management-container">
      <template #content>
        <DataTable :value="users" paginator :rows="5" class="user-datatable">
          <Column field="id" header="id" />
          <Column field="name" header="Nome" />
          <Column field="email" header="E-mail" />
          <Column header="Ações">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" @click="editUser(slotProps.data)" class="p-button-text edit-button" />
              <Button icon="pi pi-trash" @click="deleteU(slotProps.data.id)" class="p-button-text delete-button" />
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserService } from '../services/UserService';

const { getUsers, addUser, updateUser, deleteUser } = useUserService();

const users = ref([]);
const user = ref({ name: '', email: '' });
const isEditing = ref(false);
const editingUserId = ref(null);

const loadUsers = async () => {
  try {
    users.value = await getUsers();
  } catch (error) {
    console.error('Erro ao carregar usuários:', error);
  }
};

onMounted(loadUsers);

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      await updateUser(editingUserId.value, user.value);
    } else {
      await addUser(user.value);
    }
    resetForm();
    await loadUsers();
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
  }
};

const deleteU = async (id) => {
  try {
    await deleteUser(id);
    await loadUsers();
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
};

const editUser = (userToEdit) => {
  user.value = { name: userToEdit.name, email: userToEdit.email };
  editingUserId.value = userToEdit.id;
  isEditing.value = true;
};

const cancelEdit = () => {
  resetForm();
};

const resetForm = () => {
  user.value = { name: '', email: '' };
  isEditing.value = false;
  editingUserId.value = null;
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

.view {
  width: 90vw;
  height: 100vh;
  padding: 2rem;
}

.user-management-container {
  margin-top: 2rem;
  width: 90vw;
}

.user-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background-color: #007bff;
  color: white;
}

.cancel-button {
  background-color: #dc3545;
  color: white;
}

.user-datatable {
  margin-top: 1rem;
}

.edit-button,
.delete-button {
  margin-right: 0.5rem;
}

.edit-button {
  color: #007bff;
}

.delete-button {
  color: #dc3545;
}

.edit-dialog {
  width: 30rem;
}
</style>
