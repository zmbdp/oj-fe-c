import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "Layout",
    //   component: () => import("@/views/Layout.vue"),
    //   redirect: "/b-oj/question",
    //   children: [
    //     {
    //       path: "/b-oj/exam",
    //       name: "Exam",
    //       component: () => import("@/views/Exam.vue"),
    //       meta: { showBanner: true },
    //     },
    //     {
    //       path: "/b-oj/question",
    //       name: "Question",
    //       component: () => import("@/views/Question.vue"),
    //       meta: { showBanner: true },
    //     },
    //     {
    //       path: "/b-oj/user/message",
    //       name: "UserMessage",
    //       component: () => import("@/views/Message.vue"),
    //     },
    //     {
    //       path: "/b-oj/user/userDetail",
    //       name: "UserDetail",
    //       component: () => import("@/views/User.vue"),
    //     },
    //     {
    //       path: "/b-oj/user/message/list",
    //       name: "MessageList",
    //       component: () => import("@/views/Message.vue"),
    //     },
    //     {
    //       path: "/b-oj/user/exam/list",
    //       name: "myExamList",
    //       component: () => import("@/views/MyExam.vue"),
    //     },
    //   ],
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("@/views/Login.vue"),
    //   meta: { showBanner: false },
    // },
    // {
    //   path: "/b-oj/code/ide",
    //   name: "Ide",
    //   component: () => import("@/views/Code.vue"),
    // }
  ],
});

export default router;
