module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // https://stackoverflow.com/questions/68776902/should-i-use-pluginvue-essential-and-pluginvue-vue3-recommended-when-linti
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  // 全局变量忽略检测
  globals: {
    uni: 'writable',
  },
}
