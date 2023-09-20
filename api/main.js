import createRequest from '../utils/request'

export function loginRequest(data) {
    return createRequest({
        url:'/login',
        method:'POST',
        data,
        needLogin:false
    })
}
export function getScoreListRequest(data) {
    return createRequest({
        url:'/scores',
        data,
        needLogin:false
    })
}
export function getRawScoreListRequest(data) {
    return createRequest({
        url:'/raw-scores',
        data,
        needLogin:false
    })
}
export function getCourseListRequest(data) {
    return createRequest({
      url: '/courses',
      data
    })
  }

export function getAttendanceListRequest(data){
    return createRequest({
        url: '/attendances',
        data
      })
}

  // 初始化登录（仅限有验证码的教务系统）
export function initLoginRequest(data) {
    return createRequest({
      url: '/login-init',
      data,
      needLogin: false
    })
  }
  
  // 登录（需要验证码的情况）
  export function loginWithVerifyRequest(data) {
    return createRequest({
      url: '/login-verify',
      method: 'POST',
      data,
      needLogin: false
    })
  }