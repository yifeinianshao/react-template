/**
 * @Author: 张威
 * @Date: 2018-05-29 18:57:03
 * @Last Modified by: 张威
 * @Last Modified time: 2018-05-30 09:27:32
 */
import axios from 'axios'

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
