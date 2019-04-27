import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    external: ['chai', '@benmaruchu/faker','lodash', 'sinon', 'sinon-chai'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        interop: false,
        esModule: false,
        preferConst: true,
        strict: true,
      },
      { file: pkg.module, format: 'es' },
    ],
  },
];
