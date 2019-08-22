// pages/more/more.js
import { getInTheaters, getHotMovies} from '../../api/movie/index.js';
let start, count, type;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    height: '',
    loading:true,
    loadMore:false,
  },
  onCardClick(e){
    const id = e.currentTarget.dataset.id;
    // 根据id查询电影详情
    wx.navigateTo({
      url: '/pages/movie-detail/movie-detail?id=' + id,
    })
  },
  loadMovies(){
    let getMovieFn;
    switch(type){
      case 'inTheaters':
        getMovieFn = getInTheaters;
        break;
      case 'hot':
        getMovieFn = getHotMovies;
        break;
    }
    getMovieFn({
      start,
      count,
    }).then(paged => {
      console.log(paged);
      let movies = paged.subjects
      if(type ==='hot'){
        movies = movies.map(item => {
          return {
            id: item.id,
            title: item.title,
            images: {
              large: item.cover,
            },
            rating: {
              average: item.rate
            }
          }
        })
      }
      this.setData({
        movies: [...this.data.movies, ...movies],
        loading:false,
        loadMore: false,
      })
      //加载完后，start设为返回的个数
      start = start + movies.length;
      count = 9;
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            height: res.windowHeight
          })
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    start = 0;
    count = 18;
    type = "inTheaters";
    type = options.type;
    this.loadMovies();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadMore:true,
    });
    this.loadMovies();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})