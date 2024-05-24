import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { uniappRoutes } from 'vite-plugin-uniapp-routes'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite'

import { WeappTailwindcssDisabled } from './platform'
import postcssPlugins from './postcss.config.cjs'

export default defineConfig({
  plugins: [
    uniappRoutes(),
    uni(),
    uvwt({
      rem2rpx: true,
      disabled: WeappTailwindcssDisabled,
    }),
    eslintPlugin({
      fix: true,
      include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
    }),
  ],
  base: './',
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
  build: {
    sourcemap: false,
  },
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
