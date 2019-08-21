import request from '../request.js';
import Mock from 'mockjs';
const apiKey ='?apikey=0b2bdeda43b5688921839c8ecb20399b';
//获取Top250电影列表，支持分页
const top25Api = '/v2/movie/top250' + apiKey;
const inTheatersApi = '/v2/movie/in_theaters' + apiKey;
const weeklyApi = '/v2/movie/weekly' + apiKey;
const newMoviesApi = '/v2/movie/new_movies' + apiKey;
const hotMoviesApi = 'https://movie.douban.com/j/search_subjects?type=movie&tag=热门';
const movieSearchApi = '/v2/movie/search' + apiKey;
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