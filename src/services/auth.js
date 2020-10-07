import {get, post} from '../utils/request'
import {serverUrl} from '../utils/config'

/**
 * 用户登录
 * @param {userName ,password} user 
 */
export const loginApi = user => post( serverUrl +  '/api/v1/auth/login',user)

/**
 * 用户注册
 * @param {userName,password,nickName,gender,avatar} user 
 */
export const regApi = user => post('/api/v1/auth/reg',user)

/**
 * 获取用户信息
 */
export const getInfoApi = () => get('/api/v1/users/info')