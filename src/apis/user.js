import request from "@/utils/request";

export function registerService(params = {}) {
  return request({
    url: "/friend/user/register",
    method: "post",
    data: params,
  });
}

export function loginService(params = {}) {
  return request({
    url: "/friend/user/login",
    method: "post",
    data: params,
  });
}

export function codeLoginService(params = {}) {
  return request({
    url: "/friend/user/code/login",
    method: "post",
    data: params,
  });
}

export function getSimpleUserInfoService() {
  return request({
    url: "/friend/user/getSimpleUserInfo",
    method: "get",
  });
}

export function getUserDetailService(userId) {
  return request({
    url: "/friend/user/detail",
    method: "get",
    params: { userId },
  });
}

export function editUserService(params = {}) {
  return request({
    url: "/friend/user/edit",
    method: "put",
    data: params,
  });
}

export function uploadHeadImageService(params = {}) {
  return request({
    url: "/friend/user/head-image/upload",
    method: "put",
    data: params,
  });
}

export function sendCodeService(params = {}) {
  return request({
    url: "/friend/user/semiLogin/sendCode",
    method: "post",
    data: params,
  });
}
