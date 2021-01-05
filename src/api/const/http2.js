import qs from 'qs'
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { storage } from '@/utils/storage'
import { showLoading, hideLoading } from '@/libs/loading'

window.axios = axios;

axios.defaults.withCredentials = true;

const unUsedLoginRequestMethods = ['send_sms', 'retrieve_pwd', 'check_sms_code', 'login'] // 不用登录的接口
const http = axios.create({
  baseURL: window.$config.VUE_APP_API_URL,
  timeout: 0,   //指定请求超时的毫秒数(0 表示无超时时间)
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
    // 'Access-Control-Expose-Headers': 'authToken'
    // 'authToken': storage.getItem('TOKEN')
  }
})

http.interceptors.request.use(
  config => {
    console.log(config, "config");

    var VUE_APP_API_URL = localStorage.getItem('VUE_APP_API_URL');
    if (VUE_APP_API_URL) {
      config.baseURL = VUE_APP_API_URL;
    }

    // if(config.url=='/api/deal/queryDealRecord'){
    //   console.log(config.url);

    // }
    showLoading()
    if (!navigator.onLine) {
      // config.headers.authToken = storage.getItem('TOKEN')
      // Toast('网络连接失败，请重试')
    } else {
      // loading
      // Indicator.open()
      if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
        config.data = qs.stringify(config.data)
      }
      return config
    }
  },
  error => {
    // Indicator.close()
    return Promise.reject(error)
  }
)

let isReLogin = false

http.interceptors.response.use(
  response => {
    // loadend
    // Indicator.close()
    // 登录失效
    // console.log(response)
    hideLoading()

    const methodUrl = response.config.url
    const matchedMethodUrl = unUsedLoginRequestMethods.find(item =>
      methodUrl.includes(item)
    )
    if (!response.data.isLogin && !matchedMethodUrl && !isReLogin && methodUrl != '/api/deal/queryDealRecord') {
      response.data.msg = ''

      if (!isReLogin) {
        store.commit('logout')
        Message.warning('登录已失效,请重新登录')
        isReLogin = true
        setTimeout(() => {
          isReLogin = false
        }, 5000)
      }
    }
    return response.data
  },
  error => {
    // Indicator.close()
    hideLoading()
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break

        case 401:
          error.message = '未授权，请登录'
          break

        case 403:
          error.message = '拒绝访问'
          break

        case 404:
          error.message = `请求地址出错`
          break

        case 408:
          error.message = '请求超时'
          break

        case 500:
          error.message = '抱歉，系统繁忙！'
          break

        case 501:
          error.message = '服务未实现'
          break

        case 502:
          error.message = '网关错误'
          break

        case 503:
          error.message = '服务不可用'
          break

        case 504:
          error.message = '网关超时'
          break

        case 505:
          error.message = 'HTTP版本不受支持'
          break

        default:
      }
      // Toast(error.message)
    }
    return Promise.reject(error)
  }
)

export default http
