import AutoImport from 'unplugin-auto-import/vite';  // 导入 AutoImport 插件
import Components from 'unplugin-vue-components/vite';  // 导入 Components 插件
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';  // 确保导入 ElementPlusResolver


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/dev-api": {
        target: "http://127.0.0.1:19090/friend",  // 这里需要修正 http:// 地址
        rewrite: (p) => p.replace(/^\/dev-api/, ""),
      },
    },
  },
});
