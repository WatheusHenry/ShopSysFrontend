<template>
  <Dialog header="Cadastrar Nova Venda" :visible="visible" :modal="true" :closable="false" :closeOnEscape="true"
    :dismissableMask="true" @hide="emit('update:visible', false)">
    <form @submit.prevent="handleSubmit">

      <div class="p-field">
        <label for="amount">Valor da Venda (R$)</label>
        <InputText v-model="sale.amount" id="amount" placeholder="Digite o valor" />
      </div>

      <footer>
        <Button label="Cadastrar" icon="pi pi-check" type="submit" />
        <Button label="Cancelar" icon="pi pi-times" @click="closeModal()" class="p-button-secondary" />
      </footer>
    </form>
  </Dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useSalesService } from '@/services/SalesService'; 
const props = defineProps(['visible', 'users']);
const emit = defineEmits(['update:visible', 'onCreate']);

const sale = ref({
  seller_id: localStorage.getItem('user_id'),
  amount: '',
});

const closeModal = () => {
  emit('update:visible', false);
}

const handleSubmit = async () => {
  try {
    const salesService = useSalesService();
    await salesService.createSale(sale.value);
    emit('onCreate', sale.value);
    sale.value = { seller_id: null, amount: '', };
    emit('update:visible', false);
    window.location.reload()
  } catch (error) {
    alert(error.message);
  }
};
</script>

<style scoped>
.p-field {
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

footer {
  display: flex;
  gap: 1rem;
}
</style>
