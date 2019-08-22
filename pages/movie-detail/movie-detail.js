// pages/movie-detail/movie-detail.js
import {
  getMovieDetail
} from '../../api/movie/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    loading: true,
    summaryExpand:true,
    toggleBtnVisible:false,
  },
  toggleSummaryExpand(){
    this.setData({
      summaryExpand:!this.data.summaryExpand
    })
  },
  onPhotoClick(e){
    const dataset = e.target.dataset;
    const current = dataset.src;
    const urls = dataset.photos.map(item=>item.image);
    wx.previewImage({
      urls,
      current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '正在加载...'
    })
    let {
      id
    } = options;
    id = id || '27180759';

    //获取电影详情
    getMovieDetail(id).then(detail => {
      const ratings = Object.values(detail.rating.details);
      const ratings_count = ratings.reduce((prev, curr) => {
        return prev + curr;
      });
      detail.ratings_count = ratings_count;
      this.setData({
        detail,
        loading: false,
      },()=>{
        //如果简介超过一定的高度，则显示展开收起按钮
        const query = wx.createSelectorQuery();
        query.select('#movie-summary').boundingClientRect().exec((rect) => {
          if (rect[0].height > 79) {
            this.setData({
              toggleBtnVisible: true,
              summaryExpand: false,
            })
          }
        })
      });
      wx.setNavigationBarTitle({
        title: detail.title
      })
      console.log(detail);
      
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