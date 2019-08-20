// pages/list/list.js
import Mock from '../../miniprogram_npm/mockjs/index.js';
import {request} from '../../api/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: [],
    movies: [],
  },
  onMovieCardTap(e) {
    console.log(e);
  },

  getMovies() {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250?count=9',
      header: {
        "Content-Type": "json"
      },
      success: (resp) => {
        const {
          subjects
        } = resp.data;
        
        const movies = subjects.map(item => {
          return {
            name: item.title,
            img: item.images.large,
            score: item.rating.average,
            
          }
        })
        this.setData({
          movies,
        })
      }
    })
  },

  getInTheaters() {
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters?count=6',
      header: {
        "Content-Type": "json"
      },
      success: (resp) => {
        const {
          subjects
        } = resp.data;
        
        const swipers = subjects.map(item=>{
          wx.request({
            url: 'https://douban.uieee.com/v2/movie/subject/'+item.id,
            header: {
              "Content-Type": "json"
            },
            success:(resp=>{
              const {
                summary,id
              } = resp.data;
              const target = this.data.swipers.filter(item=>item.id === id)[0]
              target.summary = summary;
              this.setData({
                swipers:this.data.swipers,
              })
            })
          })
          return {
            id: item.id,
            img: item.images.large,
            title: item.title,
            score: item.rating.average,
            casts: item.casts.map(c => c.name),
          }
        });
        this.setData({
          swipers,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(this.data.imgs);
    this.getMovies();
    this.getInTheaters();
    request({
      url: 'https://douban.uieee.com/v2/movie/top250?count=9',
      header: {
        "Content-Type": "json"
      },
    }).then(resp=>{
      console.log(resp);
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