import request from "@/utils/request";

//题目基本操作
export function getQuestionListService(params) {
  return request({
    url: "/friend/question/semiLogin/list",
    method: "get",
    params,
  });
}

export function getHotQuestionListService() {
  return request({
    url: "/friend/question/semiLogin/hotList",
    method: "get"
  });
}

export function getQuestionDetailService(questionId) {
  return request({
    url: "/friend/question/semiLogin/detail",
    method: "get",
    params: { questionId },
  });
}

//用户提交题目操作
export function submitQuestionService(params) {
  return request({
    url: "/friend/user/question/submit",
    method: "post",
    data: params,
  });
}

//查看题目执行情况
export function getExeResultService(examId, questionId, currentTime) {
  return request({
    url: "/friend/user/question/exe/result",
    method: "get",
    params: { examId, questionId, currentTime },
  });
}

export function preQuestionService(questionId) {
  return request({
    url: "/friend/question/preQuestion",
    method: "get",
    params: { questionId },
  });
}

export function nextQuestionService(questionId) {
  return request({
    url: "/friend/question/nextQuestion",
    method: "get",
    params: { questionId },
  });
}
