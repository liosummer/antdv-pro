import { resolve } from 'path'
import * as process from 'process'
import fsExtra from 'fs-extra'
import { transformSync } from 'esbuild'
import fg from 'fast-glob'

const themeConfig = resolve(process.cwd(), './src/config/default-setting.ts')
const code = fsExtra.readFileSync(themeConfig, 'utf-8')

const toJs = (code: string) => {
  const res = transformSync(code, {
    target: 'esnext',
    loader: 'ts',
  })
  console.log(res.code)
}

const listDir = async () => {
  const root = process.cwd()
  const files = await fg(['./src/**/*.vue', './src/**/*.ts'], {
    cwd: root,
    ignore: [],
  })
  console.log(files)
}

listDir()
