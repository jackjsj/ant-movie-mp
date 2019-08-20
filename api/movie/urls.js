/**
 * 电影条目相关接口
 */
import {path} from '../urls.js';
//获取Top250电影列表，支持分页
export const top25Api = path + '/v2/movie/top250';
export const inTheatersApi = path + 'v2/movie/in_theaters';