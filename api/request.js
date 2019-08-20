export function request(options) {
  const {url,data,header,method} = options;
  const promise = new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: header || {
        "Content-Type": "json"
      },
      method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        resolve(res);
      },
      fail: function(res) {
        reject(res);
      }
    })
  })
  return promise;
}