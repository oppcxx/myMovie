import axios  from 'axios'
import {serverUrl} from './config'
import { getToken } from './tools';

const instance = axios.create({
    baseURL:serverUrl,
    timeout:5000
})

// 全局请求拦截
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.token = getToken();//设置token
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 全局请求拦截
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error)
    // if(error.response.status === 401){
    //   window.location.href = '/';//服务器返回状态码为401时，需要跳转到登录页重新登录
    // }
    return Promise.reject(error);
  });

export const get = (url,params) => instance.get(url,{params});

export const post = (url,data) => instance.post(url,data);

export const put = (url,data) => instance.put(url,data);

export const del = (url) => instance.delete(url);

export default axios;