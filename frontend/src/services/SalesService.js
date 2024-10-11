import axios from 'axios';
import dayjs from 'dayjs';

export const useSalesService = () => {
  const getSalesData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://127.0.0.1:8000/api/sales', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const sales = response.data;

      const totalSales = sales.reduce((total, sale) => total + parseFloat(sale.amount), 0);

      const lastMonth = dayjs().subtract(1, 'month');
      const lastMonthSales = sales.filter(sale => dayjs(sale.created_at).isAfter(lastMonth));

      const totalLastMonthSales = lastMonthSales.reduce((total, sale) => total + parseFloat(sale.amount), 0);

      return {
        sales,
        totalSales,
        totalLastMonthSales
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar dados de vendas');
    }
  };

  const getSalesByUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://127.0.0.1:8000/api/sales/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const sales = response.data;
      const totalSales = sales.reduce((total, sale) => total + parseFloat(sale.amount), 0);
      const totalComission = sales.reduce((total, sale) => total + parseFloat(sale.commission),0);
      const lastMonth = dayjs().subtract(1, 'month');
      const lastMonthSales = sales.filter(sale => dayjs(sale.created_at).isAfter(lastMonth));

      const totalLastMonthSales = lastMonthSales.reduce((total, sale) => total + parseFloat(sale.amount), 0);

      return {
        sales,
        totalSales,
        totalComission,
        totalLastMonthSales
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar dados de vendas');
    }
  };

  const createSale = async (saleData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://127.0.0.1:8000/api/sales', saleData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' 
        }
      });

      return response.data; 
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao criar venda');
    }
  };

  return { getSalesData, getSalesByUser, createSale };
};
