import axios from 'axios';

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseUrl: 'http://localhost:5000',
  });
};
