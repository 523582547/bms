// import qs from 'qs'
import http from './http'

function post (url, param, config) {
  return http.post(url, param, config)
}

function get (url, param, config) {
  return http.get(url, { params: param })
}

function getRequsest (url, param, config) {
  const cfg = {
    headers: {
      loading: 'yes'
    }
  }
  const option = Object.assign(cfg, config)
  return get(url, param, option)
}

function postNoLoading (url, param, config) {
  const cfg = {
    headers: {
      loading: 'no'
    }
  }
  const option = Object.assign(cfg, config)
  return post(url, param, option)
}

const RequestPlugin = {
  /* eslint-disable */
  install(Vue) {
    Vue.prototype.$reqPost = post
    Vue.prototype.$reqGet = getRequsest
    Vue.prototype.$reqPostNoLoading = postNoLoading
  }
}

export default RequestPlugin
