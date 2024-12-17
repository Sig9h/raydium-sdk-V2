import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  noExternal: [/lodash-es/], // Use regex pattern
  treeshake: true,
  minify: true
})