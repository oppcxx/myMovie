import { get, post, put, del } from '../utils/request'
import { serverUrl } from '../utils/config'


/**
 * 获取影片列表
 * 每个参数都是可选的参数page页码
 * per每页显示的数量
 * name影片的名字
 * category分类id 
 * @param {page,per,name,category} param0 
 */
export const getMoviesListApi = (params) => get('/api/v1/movies', params)

/**
 * 获取影片分类
 * 参数都为可选参数
 * page页码
 * per每页显示的数量
 * name影片的名字
 * category分类id
 * @param {page,per,name,category} params 
 */
export const getMovieCategoryApi = (params) => get('/api/v1/movie_categories', params)

/**
 * 获取影片详情
 */
export const getMovieDetailApi = () => get('/api/v1/movies/:id')

/**
 * 加入收藏
 * @param {影片id} movie 
 */
export const addMyFavs = (movie) => post('/api/v1/user/collections', movie)

/**
 * 删除收藏
 * @param {*} id 
 */
export const delMyFavs = (id) => del('/api/v1/user/collections/:' + id)