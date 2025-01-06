import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VueRouter({
      routesFolder: [
        {
          src: 'src/pages',
        },
      ],
      exclude: ['**/components/**'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/pages',
      defaultLayout: 'default',
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/],
      imports: ['vue', VueRouterAutoImports, 'pinia'],
      dts: true,
      vueTemplate: true,
    }),
    Components({
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
