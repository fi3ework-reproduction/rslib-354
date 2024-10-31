import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  output: {
    // target: 'node',
  },
  performance: {
    chunkSplit: {
      strategy: 'custom',
      splitChunks: {
        cacheGroups: {
          sources: {
            test: /./,
            name: 'sources',
            enforce: true,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
  plugins: [pluginReact()],
})
