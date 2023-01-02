import axios from 'axios';

export const getImages = async ({ page = 1, query }) => {
  const API_KEY = '12634529-23114643ce7689acc141071f8';
  const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(apiUrl);

  return response.data;
};
