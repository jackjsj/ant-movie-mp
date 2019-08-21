import {
  BASE_URL,
  apikey
} from './urls.js'

function request(options) {
  const {
    url,
    method,
    data,
    mock,
    noBaseUrl,
  } = options;
  const _url = noBaseUrl ? url : BASE_URL + url;
  return new Promise((resolve, reject) => {
    if (mock) { // 如果有Mock数据，拦截请求，100毫秒后返回mock数据
      setTimeout(() => {
        resolve(mock);
      }, 100);
    } else {
      wx.request({
        url: _url,
        data:{
          apikey,
          ...data,
        },
        method,
        header: {
          "Content-Type": "json"
        },
        success: (res) => {

          resolve(res.data);
        },
        fail: (res) => {
          reject(res);
        },
      })
    }
  })
}

export default request;