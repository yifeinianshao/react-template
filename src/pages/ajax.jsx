import axios from 'axios'

axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = 'Bearer' + 'AUTH_TOKEN'

axios.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  // Do something with response data
  return response
}, error => {
  // Do something with response error
  return Promise.reject(error)
})
