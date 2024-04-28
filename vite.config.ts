import path from 'node:path'
import { vitePluginReactServer } from '@hiogawa/react-server/plugin'
import {
  vitePluginLogger,
  vitePluginSsrMiddleware,
} from '@hiogawa/vite-plugin-ssr-middleware'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return ({
    plugins: [
      react(),
      vitePluginReactServer(),
      vitePluginLogger(),
      vitePluginSsrMiddleware({
        entry: mode === 'production' ? '/src/cf.ts' : '/src/dev.ts',
        preview: path.resolve('./dist/server/index.js'),
      }),
    ],
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    }
  })
})
