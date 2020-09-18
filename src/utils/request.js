import axios from 'axios'

/**
 * 全局统一请求方式
 * @param {请求地址} url
 * @param {请求类型} type
 * @param {请求数据} data
 * 常用的需要的配置只有以上三种，需要其他更加复杂配置可以通过传入在第四的参数对象中
 * @param {其他请求方式，例如文件上传时需要改变默认值，传入axios固定键值对即可} others
 * 关于一些项目可能涉及到请求拦截，用户信息获取同样可以写在这里
 */
const request = (url, type = 'GET', data = {}, others = {}) => {
  if (!url) throw new Error('url is not defined')
  type = type.toLocaleUpperCase()
  let axiosData = {
    method: type, // 请求方式
    url: `/api/${url}`,
    data: {
      ...data
    }
  }
  for (let other in others) {
    axiosData.other = others[other]
  }
  return axios({
    ...axiosData
  })
}

export default request
