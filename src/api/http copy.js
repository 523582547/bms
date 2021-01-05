/* eslint-disable */
import axios from 'axios'
// import bus from '@/libs/bus'
import { Message } from 'element-ui'
import { showLoading, hideLoading } from '@/libs/loading'

axios.defaults.baseURL = process.env.VUE_APP_URL
axios.defaults.timeout = 1000 * 60
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(
  (config) => {
    // config.cancelToken = bus.source.token;
    if (!config.headers.loading || config.headers.loading === 'yes') {
      showLoading()
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
axios.interceptors.response.use(
  (response) => {
    hideLoading()
    return response
  },
  (error) => {
    hideLoading()
    return Promise.reject(error)
  }
)

function processResult(res, resolve, reject, cfg) {
  if (!res || res.status !== 200) {
    reject('api error')
  } else {
    const resp = res.data
    console.log(resp)
    if (resp.code === 200) {
      resolve(resp.data)
    } else {
      Message.error(resp.message)
      if (cfg && cfg.catch) {
        reject(resp)
      } else {
        Message.error(resp)
      }
    }
  }
}

export default {
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config).then((res) => {
        processResult(res, resolve, reject, config)
      }).catch((error) => {
        Message.error('请检查网络情况')
      })
    })
  },
  get(url, data, config) {
    console.log(url)
    return new Promise((resolve, reject) => {
      axios.get(url, data, config).then((res) => {
        processResult(res, resolve, reject, config)
      }).catch((error) => {
        Message.error('请检查网络情况')
      })
    })
  }
}

