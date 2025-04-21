import api from './api';

export const loginUser = async ({ email, password }) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const validateToken = async () => {
  try {
    const response = await api.get('/auth/validate-token');
    return response.data.valid;
  } catch (error) {
    return false;
  }
};
