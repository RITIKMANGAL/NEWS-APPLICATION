import axios from 'axios';

export const fetchNews = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        page,
        pageSize,
        apiKey: import.meta.env.VITE_NEWS_API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error.message);
    return [];
  }
};
