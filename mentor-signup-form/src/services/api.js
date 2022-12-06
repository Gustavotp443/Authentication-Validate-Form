import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/"
});

api.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  console.log("Erro no interceptor do axios");
  return Promise.reject(error);
});


export default api;
