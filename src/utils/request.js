import axios from "axios";
import { getToken } from "./auth";
// import cache from "@/plugins/cache";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const service = axios.create({
  baseURL: "/dev-api",
  timeout: 5000,
});

export default service;

// request拦截器
service.interceptors.request.use(
//   (config) => {
//     // 是否需要设置 token
//     const isToken = (config.headers || {}).isToken === false;
//     // 是否需要防止数据重复提交
//     const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
//     if (getToken() && !isToken) {
//       config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     if (
//       !isRepeatSubmit &&
//       (config.method === "post" || config.method === "put")
//     ) {
//       const requestObj = {
//         url: config.url,
//         data:
//           typeof config.data === "object"
//             ? JSON.stringify(config.data)
//             : config.data,
//         time: new Date().getTime(),
//       };
//       const sessionObj = cache.session.getJSON("sessionObj");
//       if (
//         sessionObj === undefined ||
//         sessionObj === null ||
//         sessionObj === ""
//       ) {
//         cache.session.setJSON("sessionObj", requestObj);
//       } else {
//         const s_url = sessionObj.url; // 请求地址
//         const s_data = sessionObj.data; // 请求数据
//         const s_time = sessionObj.time; // 请求时间
//         const interval = 1000; // 间隔时间(ms)，小于此时间视为重复提交
//         if (
//           s_data === requestObj.data &&
//           requestObj.time - s_time < interval &&
//           s_url === requestObj.url &&
//           config.url !== "/file/upload"
//         ) {
//           const message = "数据正在处理，请勿重复提交";
//           console.warn(`[${s_url}]: ` + message);
//           return Promise.reject(new Error(message));
//         } else {
//           cache.session.setJSON("sessionObj", requestObj);
//         }
//       }
//     }
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     Promise.reject(error);
//   }
);

service.interceptors.response.use(
//   (res) => {  //res : 响应数据
//     // 未设置状态码则默认成功状态
//     const code = res.data.code;
//     const msg = res.data.msg;
//     if (code === 3001) {
//       ElMessage.error(msg);
//       removeToken()
//       router.push('/oj/login')
//       return Promise.reject(new Error(msg));
//     } else if (code !== 1000) {
//       ElMessage.error(msg);
//       return Promise.reject(new Error(msg));
//     } else {
//       return Promise.resolve(res.data);
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
);