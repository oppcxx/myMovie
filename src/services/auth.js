import { get, post, put } from '../utils/request'
import { serverUrl } from '../utils/config'

/**
 * 用户登录
 * @param {userName ,password} user 
 */
export const loginApi = user => post(serverUrl + '/api/v1/auth/login', user)

/**
 * 用户注册
 * @param {userName,password,nickName,gender,avatar} user 
 */
export const regApi = user => post('/api/v1/auth/reg', user)

/**
 * 获取用户信息
 */
export const getInfoApi = () => get('/api/v1/users/info')

/**
 * 修改密码
 * @param {oldPassword,newPassword} props 
 */
export const modifyPasswordApi = (props) => post('/api/v1/users/change_pwd', props)

/**
 * 修改用户信息
 * @param {nickName,avatar,gender } props 
 */
export const modifyMyInfoApi = (props) => put('/api/v1/users/info', props)