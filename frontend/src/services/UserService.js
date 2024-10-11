import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const useUserService = () => {
  const getUsers = async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data.usuarios; 
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw error;
    }
  };

  const getUserById = async (userId) => {
    try {
      const response = await apiClient.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      throw error;
    }
  };

  const updateUser = async (userId, userData) => {
    try {
      const response = await apiClient.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw error;
    }
  };

  const deleteUser = async (userId) => {
    try {
      await apiClient.delete(`/users/${userId}`);
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      throw error;
    }
  };

  return { getUsers, getUserById, updateUser, deleteUser };
};
