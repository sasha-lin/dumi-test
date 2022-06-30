import commonjs from '@rollup/plugin-commonjs';

export default {
  entry: 'src/index.ts', // 入口文件
  // umd: true,
  // cjs: 'rollup', // cjs格式
  esm: 'rollup', // ems格式
  //   lessInBabelMode: true, // bable模式下less编译,
  extraRollupPlugins: [commonjs()],
};
