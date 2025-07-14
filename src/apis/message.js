import service from "@/utils/request";

export function getMessageListService(params) {
  return service({
    url: "/user/message/list",
    method: "get",
    params,
  });
}

// 删除消息的接口
export function deleteMessageService(textId) {
  return service({
    url: "/user/message/delete",
    method: "delete",
    params: { textId },  // 使用 params 传递简单参数
  });
}