import axios from 'axios'
axios.defaults.baseURL = "http://103.176.78.214:8080/";

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token")
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (localStorage.getItem("token")) { // or get it from localStorage
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token")
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

