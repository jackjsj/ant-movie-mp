import request from '../request.js';
import Mock from 'mockjs';
//获取Top250电影列表，支持分页
const top250Api = '/v2/movie/top250';
const inTheatersApi = '/v2/movie/in_theaters';
const weeklyApi = '/v2/movie/weekly';
const newMoviesApi = '/v2/movie/new_movies';
const hotMoviesApi = 'https://movie.douban.com/j/search_subjects?type=movie&tag=热门';
//电影详情接口直接加id
const movieDetailApi = '/v2/movie/subject/';

/**
 * 获取TOP250电影列表
 */
export function getTop250Movies() {
  return request({
    url: top25Api,
  });
}

/**
 * 影院热映
 */
export function getInTheaters() {
  return request({
    url: inTheatersApi,
  });
}

/**
 * 口碑榜
 */
export function getWeekly() {
  return request({
    url: weeklyApi,
  })
}

/**
 * 新片榜
 */
export function getNewMovies() {
  return request({
    url: newMoviesApi,
  })
}

/**
 * 豆瓣热门
 */
export function getHotMovies(){
  return request({
    url: hotMoviesApi,
    noBaseUrl:true,
  })
}

/**
 * 获取电影详情
 */
export function getMovieDetail(id){
  return request({
    url: movieDetailApi + id,
  })
}