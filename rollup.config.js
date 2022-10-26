import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    //UMD, ESM and CJS
    input: packageJson.input,
    output: [
      {
        file: packageJson.umd,
        format: "umd",
        name: "pfmComponentsLibrary", // this is the name of the global object
        esModule: false,
        exports: "named",
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss(),
      babel({
        babelHelpers: "bundled",
      }),
    ],
  },
];
