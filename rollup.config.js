import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
  {
    // UMD
    input: packageJson.input,
    plugins: [
      resolve(),
      babel({
        babelHelpers: "bundled",
      }),
    ],
    output: {
      file: packageJson.umd,
      format: "umd",
      name: "pfmComponentsLibrary", // this is the name of the global object
      esModule: false,
      exports: "named",
      sourcemap: true,
    },
  },
  {
    // ESM and CJS
    input: packageJson.input,
    output: [
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
    plugins: [resolve(), commonjs()],
  },
];
