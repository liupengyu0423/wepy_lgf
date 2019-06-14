/*
* http接口中的参数param说明
* param = {
*   url: '',
*   data: {},
*   header: {},
*   method: '',
*   dataType: 'json'
* }
*/
import wepy from 'wepy'
export default class HTTP {
  static async request(param = {}, opts = {loading: true, title: '加载中'}) {
    let result = null
    opts.loading && wepy.showLoading({title: opts.title || '加载中'})
    try {
      let res = await wepy.request(param);
      if (res.data.errcode === 200 || res.data.statusCode === 200) {
        result = res.data
        wepy.hideLoading()
      }
    } catch (err) {
      opts.loading && wepy.hideLoading()
      wepy.showToast({
        title: '服务器出错了',
        icon: 'none',
        duration: 1000
      })
    }
    return result
  }

  static get(param, opts) {
    param = {...param, ...{method: 'GET', dataType: 'json'}}
    return this.request(param, opts)
  }

  static post(param, opts) {
    param = {...param, ...{method: 'POST', dataType: 'json', header: { "Content-Type": "application/x-www-form-urlencoded" }}}
    return this.request(param, opts)
  }

  static put(param, opts) {
    param = {...param, ...{method: 'PUT', dataType: 'json'}}
    return this.request(param, opts)
  }

}
