import service from "@/utils/request";

// 获取验证码接口
export function sendCodeService(params = {}) {
  return service({
    url: "/user/sendCode",
    method: "post",
    data: params,
  });
}

// 登录接口
export function codeLoginService(params = {}) {
  return service({
    url: "/user/code/login",
    method: "post",
    data: params,
  });
}

// 退出登录，申请删除 redis 里面的 token
export function logoutService() {
  return service({
    url: "/user/logout",
    method: "delete",
  });
}

// 获取用户的头像和昵称
export function getUserInfoService() {
  return service({
    url: "/user/info",
    method: "get",
  });
}

export function getUserDetailService(userId) {
  return service({
    url: "/user/detail",
    method: "get",
    params: { userId },
  });
}


export function editUserService(params = {}) {
  return service({
    url: "/user/edit",
    method: "put",
    data: params,
  });
}

export function updateHeadImageService(params = {}) {
  return service({
    url: "/user/head-image/update",
    method: "put",
    data: params,
  });
}

export function userSubmitService(params = {}) {
  return service({
    url: "/user/question/rabbit/submit",
    method: "post",
    data: params,
  });
}