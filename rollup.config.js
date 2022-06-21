import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";


export default {
  input: 'src/data.ts',
  output: { file: 'dist/data.js', format: 'es' },
  plugins: [
    typescript(),
    json(),
    terser()
  ]
}