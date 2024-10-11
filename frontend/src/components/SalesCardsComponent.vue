<template>
  <section class="cards-container">
    <Card class="info-card">
      <template #title>
        <i class="icons pi pi-dollar"></i>Total de Vendas
      </template>
      <template #content>
        <h2>R$ {{ totalSales }}</h2>
      </template>
    </Card>

    <Card class="info-card">
      <template #title>
        <i class="icons pi pi-calendar-plus"></i> Vendas do Último Mês
      </template>
      <template #content>
        <h2>R$ {{ lastMonthSales }}</h2>
      </template>
    </Card>


  </section>
</template>

<script setup>

const props = defineProps({
  totalSales: Number,
  lastMonthSales: Number,
});
</script>

<style scoped>
.cards-container {
  display: flex;
  width: 100%;
  gap: 20px;
}

.info-card {
  flex: 1;
}

.icons{
  padding: 0.5rem;
  background: #f0f0f0;
  border-radius: 10rem;
  margin-right: 0.5rem;
}

.info-card h2 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

h2{
  font-weight: 500;
  color: rgb(27, 148, 41) !important;
}
</style>
