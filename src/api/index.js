import request from '@/utils/request'

/**
 * 这里假定有一个登陆请求
 * 实际在组件中传递过来的值只需要有data就可以了，因为url及type是已知固定的
 */
export const login = data => {
  return request('login/pwd', 'post', {
    ...data
  })
}
