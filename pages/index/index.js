// pages/list/list.js
import Mock from '../../miniprogram_npm/mockjs/index.js';
import {
  getTop250Movies,
  getInTheaters,
  getWeekly,
  getNewMovies,
  getHotMovies,
} from '../../api/movie/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [],
    movies: [],
    inTheaters: [],
    weekly: [],
    newMovies: [],
    hotMovies: [],
  },
  /**
   * 电影条目卡片点击事件监听
   */
  onCardClick(e){
    const id = e.currentTarget.dataset.id;
    console.log(id);
    // 根据id查询电影详情
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 影院热映
    getInTheaters().then(data => {
      this.setData({
        inTheaters: data.subjects
      })
    })
    // 豆瓣热门
    getHotMovies().then(data => {
      this.setData({
        hotMovies: data.subjects.map(item => {
          return {
            id:item.id,
            title: item.title,
            images: {
              large: item.cover,
            },
            rating: {
              average: item.rate
            }
          }
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})