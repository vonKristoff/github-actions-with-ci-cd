import typescript from "r@ollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import html from "rollup-plugin-html"
import json from "rollup-plugin-json"

const DEVELOPMENT = "development"

const input = "js/main.ts" // input
const output = {
  format: "iife", // runtime: browser
  file: "public/bundle.js", // target output
  name: process.env.npm_package_name.split("-").join(""), // making it namesafe for JS,
  sourcemap: process.env.NODE_ENV === DEVELOPMENT
}

export default {
  input,
  plugins: [
    typescript(),
    resolve(),
    html({ include: "js/templates/*.html" }),
    json({ include: "js/*.json" }),
    commonjs({ include: "node_modules/**" }),
    replace({ exclude: "node_modules/**", ENV: JSON.stringify(process.env.NODE_ENV || DEVELOPMENT) })
  ],
  output
}
