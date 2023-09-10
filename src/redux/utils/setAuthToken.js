import axios from 'axios';

const setAuthToken = (token) => {
  axios.defaults.baseURL = 'https://awesomedevs-api.onrender.com';
  if (!!token) {
    //apply to every req
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    //delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
