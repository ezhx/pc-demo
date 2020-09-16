module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      // 用于and-design-vue按需引入,路径新增了es
      'import',
      {libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css'}
    ]
  ]
}
