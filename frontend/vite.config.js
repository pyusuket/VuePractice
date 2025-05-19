import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ を src ディレクトリにエイリアス
    },
  },
  server: {
    host: true,         // 0.0.0.0 にバインドして外部アクセス許可
    port: 5173,         // 明示的にポート指定（任意）
    strictPort: true,   // ポート競合時にエラーにする
    watch: {
      usePolling: true, // Docker内でのファイル監視問題を回避（特に Windows や WSL）
    },
  },
})
