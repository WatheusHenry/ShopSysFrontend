import axios from 'axios';

export const useAuthService = () => {
  const login = async (credentials) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer login');
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer registro');
    }
  };

  return { login, register };
};
