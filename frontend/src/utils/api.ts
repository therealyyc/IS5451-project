import axios from 'axios';

// 创建 axios 实例
const fetch = axios.create({
});

fetch.interceptors.response.use(function (response: any) {
  return response.data;
}, function (error: any) {

  if (error.response.status === 401) {
  }
  return Promise.reject(error);
});


export default fetch;