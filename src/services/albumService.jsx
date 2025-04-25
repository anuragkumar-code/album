import api from './api';

export const createAlbum = async (formData) => {
    try {
      const response = await api.post('/albums', formData);
      return response.data;
    } catch (error) {
      throw error?.response?.data || error;
    }
};