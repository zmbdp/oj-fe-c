import request from "@/utils/request";

//竞赛列表
export function getExamListService(params) {
  return request({
    url: "/friend/exam/semiLogin/list",
    method: "get",
    params,
  });
}

// 竞赛题目列表
export function getExamQuestionListService(params) {
  return request({
    url: "/friend/exam/examQuestion/list",
    method: "get",
    params,
  });
}

// 报名参赛
export function enterExamService(enterExamDTO) {
  return request({
    url: "/friend/user/exam/enter",
    method: "post",
    data: enterExamDTO,
  });
}

//提交竞赛
export function submitExamService(userExamDTO) {
  return request({
    url: "/friend/user/exam/submit",
    method: "post",
    data: userExamDTO,
  });
}

//获取用户竞赛列表
export function getMyExamListService(params = {}) {
  return request({
    url: "/friend/user/exam/list",
    method: "get",
    params,
  });
}

//查看竞赛排名
export function getExamRankService(params = {}) {
  return request({
    url: "/friend/exam/rank/list",
    method: "get",
    params,
  });
}

//查看竞赛基本信息
export function getExamBaseInfoService(examId) {
  return request({
    url: "/friend/exam/baseInfo",
    method: "get",
    params: {examId},
  });
}

