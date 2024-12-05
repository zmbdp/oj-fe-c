import request from "@/utils/request";

export function getMessageListService(params) {
  return request({
    url: "/friend/user/message/list",
    method: "get",
    params,
  });
}

export function getMessageDetailService(messageId, textId) {
  return request({
    url: "/friend/user/message/detail",
    method: "get",
    params: {messageId, textId},
  });
}

export function deleteMessageService(messageId) {
  return request({
    url: "/friend/user/message/delete",
    method: "delete",
    params: {messageId},
  });
}