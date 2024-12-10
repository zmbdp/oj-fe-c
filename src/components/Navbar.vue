<template>
  <div class="oj-navbar">
    <div class="oj-navbar-menus">
      <img class="oj-navbar-logo" src="@/assets/logo.png" />
      <el-menu router class="oj-navbar-menu" mode="horizontal">
        <el-menu-item index="/c-oj/home/question">题库</el-menu-item>
        <el-menu-item index="/c-oj/home/exam">竞赛</el-menu-item>
      </el-menu>
    </div>
    <div class="oj-navbar-users">
      <img v-if="isLogin" class="oj-message" @click="goMessage" src="@/assets/message/message.png" />
      <el-dropdown v-if="isLogin">
        <div class="oj-navbar-name">
          <img class="oj-head-image" v-if="isLogin" :src="userInfo.headImage" />
          <span class="oj-navbar-nick-name">{{ userInfo.nickName }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goUserInfo">
              <div class="oj-navabar-item">
                <span>个人中心</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item @click="goMyExam">
              <div class="oj-navabar-item">
                <span>我的比赛</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="oj-navabar-item">
                <span @click="handleLogout">退出登录</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span class="oj-navbar-login-btn" v-if="!isLogin" @click="goLogin">登录</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import router from '@/router';
import { getToken, removeToken } from '@/utils/cookie';
import { logoutService, getUserInfoService } from '@/apis/user';

const isLogin = ref(false);

const userInfo = reactive({
  nickName: '',
  headImage: ''
});

async function checkLogin() {
  if (getToken()) {
    const userInfoRes = await getUserInfoService();
    Object.assign(userInfo, userInfoRes.data);
    isLogin.value = true;
  }
}

checkLogin();

function goLogin() {
  router.push('/c-oj/login');
}

// function goMyExam() {
//   router.push('/c-oj/home/user/exam')
// }

// function goUserDetail() {
//   router.push('/c-oj/home/user/detail')
// }

// function goMessage() {
//   router.push('/c-oj/home/user/message')
// }


async function handleLogout() {
  await ElMessageBox.confirm('确认退出', '温馨提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  });
  await logoutService();
  removeToken();
  isLogin.value = false;
}
</script>

<style lang="scss" scoped>
.oj-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 1520px;
  margin: 0 auto;

  .oj-navbar-menus {
    display: flex;
    align-items: center;
    height: 50px;

    .el-menu-item {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 20px;
      color: #222222;
      line-height: 28px;
      text-align: center;
      width: 42px;
      text-align: left;
      margin-right: 25px;
    }
  }

  .oj-navbar-logo {
    width: 38px;
    height: 38px;
    background: #32C5FF;
    border-radius: 8px;
    cursor: pointer;
    object-fit: contain;
    margin-right: 59px;
  }

  .oj-navbar-menu {
    width: 600px;
    border: none;

    .el-menu-item {
      font-size: 16px;
      font-weight: 500;
      background-color: transparent !important;
      transition: none;
      border: none;
      line-height: 60px;
    }
  }

  .oj-navbar-users {
    display: flex;
    align-items: center;
  }

  .oj-navbar-login-btn {
    line-height: 60px;
    display: inline-block;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 18px;
    color: #222222;
    text-align: center;
    cursor: pointer;

    .line {
      display: inline-block;
      width: 25px;
    }
  }

  .oj-message {
    cursor: pointer;
    margin-top: 15px;
  }

  .oj-head-image {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 10px;
    object-fit: cover; /* 保证图片不被拉伸 */
  }

  .oj-navbar-name {
    cursor: pointer;
    margin-top: 15px;
    font-weight: 400;
    color: #000;
    margin-left: 15px;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-shrink: 0; /* 防止昵称过长时影响布局 */
  }

  .oj-navbar-nick-name {
    max-width: 150px; /* 设置最大宽度 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 超出隐藏 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
    margin-left: 8px; /* 给昵称添加一点间距 */
  }

  .oj-navabar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
  }
}
</style>
