1. `npx rsbuild inspect`
2. search cacheGroups in rspack dumped config, the result is expected, same as user's configuration.
3. uncomment `target: 'node',` in rsbuild config
4. `npx rsbuild inspect`
5. search cacheGroups rspack dumped config, the result is not modified, behavior not aligned with non-API usage.
