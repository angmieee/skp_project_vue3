module.exports = {
    parser: 'vue-eslint-parser',

    env: {
        node: true,
    },

    parserOptions: {
        parser: '@typescript-eslint/parser', // 指定解析器
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'eslint:recommended', // ESLint 内置的推荐规则
        'plugin:vue/vue3-recommended', // vue3 推荐的规则
        // 'plugin:vue/recommended' // vue2 推荐的规则，使用 Vue.js 2.x. 时开启
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // https://github.com/prettier/eslint-config-prettier
    ],

    rules: {
        // eslint-disable-next-line prettier/prettier
        'no-console':
            process.env.NODE_ENV === 'production'
                ? ['error', { allow: ['error', 'warn'] }]
                : 'off', //生产模式不允许使用log
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //生产默认不允许使用debugger
    },
};
