import path from 'node:path'
import { vitePluginReactServer } from '@hiogawa/react-server/plugin'
import {
  vitePluginLogger,
  vitePluginSsrMiddleware,
} from '@hiogawa/vite-plugin-ssr-middleware'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    vitePluginReactServer(),
    vitePluginLogger(),
    vitePluginSsrMiddleware({
      entry: '/src/cf.ts',
      preview: path.resolve('./dist/server/index.js'),
    }),
  ],
})
