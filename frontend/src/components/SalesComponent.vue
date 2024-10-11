<template>
  <div>
    <div class="filter">
      <h2>Vendas do Mês</h2>
      <div class="filterInput">
        <i class="pi pi-search"></i>
        <InputText v-model="filterText" placeholder="Filtrar por nome de usuário" />
      </div>
    </div>
    <div class="table-container">
      <table class="sales-table">
        <thead>
          <tr>
            <th>ID da Venda</th>
            <th>Usuário</th>
            <th>Valor da Venda (R$)</th>
            <th>Comissão (R$)</th>
            <th>Data da Venda</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in filteredSales" :key="sale.id">
            <td>{{ sale.id }}</td>
            <td>{{ sale.user.name }}</td>
            <td>{{ formatCurrency(sale.amount) }}</td>
            <td>{{ formatCurrency(sale.commission) }}</td>
            <td>{{ formatDate(sale.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { formatCurrency, formatDate } from '@/utils/filters';
import { useSalesService } from '@/services/SalesService';

const sales = ref([]);
const filterText = ref('');
const { getSalesData } = useSalesService();

onMounted(async () => {
  const response = await getSalesData();
  sales.value = response.sales;
});

const filteredSales = computed(() => {
  return sales.value.filter(sale =>
    sale.user.name.toLowerCase().includes(filterText.value.toLowerCase())
  );
});
</script>

<style scoped>
.filterInput {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
}

.p-inputtext {
  height: 2rem;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
}

.filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.table-container {
  max-height: 40vh;
  overflow-y: auto;
}

.sales-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 1rem;
  overflow: hidden;
}

.sales-table thead tr {
  background-color: #f8f9fa;
}

.sales-table th,
.sales-table td {
  padding: 12px 15px;
  text-align: left;
  font-size: 1rem;
  color: #555;
}

.sales-table th {
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.sales-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.sales-table tr:nth-child(odd) {
  background-color: #ffffff;
}

.sales-table tr:hover {
  background-color: #f1f1f1;
}
</style>
