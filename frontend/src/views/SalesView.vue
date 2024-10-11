<template>
  <section class="content">
    <header>
      <h1>Suas vendas</h1>
      <Button label="Cadastrar Venda" icon="pi pi-plus" @click="showCreateSaleModal" />
    </header>

    <div class="cards">
      <SalesCardsComponent v-if="true" :totalSales="totalSales" :lastMonthSales="lastMonthSales" />
      <DonutChart v-if="totalSales > 0 && totalComission > 0" :totalSales="totalSales" :totalCommission="totalComission"
        title="Vendas e Comissões" />
    </div>

    <Card class="view">
      <template #content>
        <p v-if="!sales.length">Nenhuma venda encontrada.</p>

        <div class="table-wrapper" v-if="sales.length">
          <table class="sales-table">
            <thead>
              <tr>
                <th>ID da Venda</th>
                <th>Valor da Venda (R$)</th>
                <th>Comissão (R$)</th>
                <th>Data da Venda</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in sales" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ formatCurrency(item.amount) }}</td>
                <td>{{ formatCurrency(item.commission) }}</td>
                <td>{{ formatDate(item.created_at) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </Card>

    <SaleModalComponent :visible="isModalVisible" @update:visible="isModalVisible = $event" @onCreate="createSale" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSalesService } from '@/services/SalesService';
import { formatCurrency, formatDate } from '@/utils/filters';
import SalesCardsComponent from '@/components/SalesCardsComponent.vue';
import DonutChart from '@/components/DonutChartComponent.vue';
import SaleModalComponent from '@/components/SaleModalComponent.vue';

const sales = ref([]);
const { getSalesByUser } = useSalesService();
const totalSales = ref(0);
const lastMonthSales = ref(0);
const totalComission = ref(0);
const isModalVisible = ref(false);

onMounted(async () => {
  const userId = localStorage.getItem('user_id');
  if (userId) {
    try {
      const response = await getSalesByUser(userId);
      sales.value = response.sales;
      totalSales.value = response.totalSales;
      lastMonthSales.value = response.totalLastMonthSales;
      totalComission.value = response.totalComission;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    console.error('Usuário não está logado.');
  }
});

const showCreateSaleModal = () => {
  isModalVisible.value = true;
};

const createSale = (sale) => {
  console.log('Nova venda criada:', sale);
};
</script>

<style scoped>
.content {
  justify-content: center;
  height: 100vh;
  width: 90vw;
  padding: 20px;
}

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

.cards {
  gap: 1.5rem;
  display: flex;
  width: 85vw;
}

.view {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 85vw;
}

.table-wrapper {
  max-height: 35vh;
  overflow-y: auto;
  margin-top: 1rem;
  border-radius: 1rem;
}

.sales-table {
  width: 100%;
  border-collapse: collapse;
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
