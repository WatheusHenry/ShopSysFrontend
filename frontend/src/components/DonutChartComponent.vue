<template>
  <Card>
    <template #content>
      <h2>{{ title }}</h2>
      <div class="chart-container">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
        <div class="labels-container">
          <div class="label">
            <span class="color-indicator" style="background-color: var(--p-cyan-500);"></span>
            Total de comissão: R$ {{ formatCurrency(props.totalCommission) }}
          </div>
          <div class="label">
            <span class="color-indicator" style="background-color: var(--p-orange-500);"></span>
            Total de vendas: R$ {{ formatCurrency(props.totalSales) }}
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { formatCurrency } from '@/utils/filters';
import { ref, onMounted } from 'vue'; 


onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const props = defineProps({
  totalSales: {
    type: Number,
    required: true,
  },
  totalCommission: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: 'Distribuição de Vendas e Comissões',
  },
});

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);
  return {
    datasets: [
      {
        data: [props.totalCommission, props.totalSales],
        backgroundColor: [
          documentStyle.getPropertyValue('--p-cyan-500'),
          documentStyle.getPropertyValue('--p-orange-500'),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--p-cyan-400'),
          documentStyle.getPropertyValue('--p-orange-400'),
        ],
      },
    ],
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
  };
};
</script>

<style>
.chart-container {
  display: flex;
  width: 30rem;
  align-items: center;
}

.labels-container {
  margin-left: 20px;
}

.label {
  display: flex;
  align-items: center;
}

.color-indicator {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
}

.p-chart {
  width: 7rem !important;
  height: 7rem !important;
}
</style>
