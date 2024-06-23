import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: `${packageJson.main}.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${packageJson.module}.mjs`,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
      resolve(),
      commonjs(),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es", sourcemap: true }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
