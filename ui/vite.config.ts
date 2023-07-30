import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
const pathResolve =dir=>resolve(__dirname,dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
      // 这个是配置scss
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: []
		}
	},
  server:{
    port:8080,
    cors:true
  },
  resolve:{
    alias:{
      '@':pathResolve('./src')
    }
  }
})
