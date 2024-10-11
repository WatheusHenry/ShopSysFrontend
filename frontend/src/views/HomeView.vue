<template>
  <div class="dashboard">
    <main class="content">
      <header>
        <h1>Dashboard</h1>
        <Button label="Cadastrar Venda" icon="pi pi-plus" @click="showCreateSaleModal" />
      </header>

      <section class="SalesCards">
        <SalesCards :totalSales="totalSales" :lastMonthSales="lastMonthSales" />
      </section>

      <section class="SalesTable">
        <Card>
          <template #content>
            <SalesComponent :sales="sales" :users="users" />
          </template>
        </Card>
      </section>

      <CreateSaleModal :visible="isModalVisible" @update:visible="isModalVisible = $event"
        @onCreate="createSale" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SalesCards from '@/components/SalesCardsComponent.vue';
import { useSalesService } from '@/services/SalesService';
import { useUserService } from '@/services/UserService';
import SalesComponent from '@/components/SalesComponent.vue';
import CreateSaleModal from '@/components/SaleModalComponent.vue';

const totalSales = ref(150000);
const lastMonthSales = ref(12000);
const isModalVisible = ref(false);
const sales = ref([]); 

const { getSalesData } = useSalesService();


const showCreateSaleModal = () => {
  isModalVisible.value = true;
};

const createSale = (sale) => {
  console.log('Nova venda criada:', sale);
};

onMounted(async () => {
  try {
    const salesData = await getSalesData();
    sales.value = salesData.sales; 
    totalSales.value = salesData.totalSales;
    lastMonthSales.value = salesData.totalLastMonthSales;
  } catch (error) {
    console.error('Erro ao buscar dados de vendas ou usuários:', error.message);
  }
});
</script>


<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
}

.content {
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

.add-sale-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-sale-button:hover {
  background-color: #218838;
}

.SalesCards {
  width: 40%;
  margin: 1rem;
}

.SalesTable {
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 1rem;
}
</style>