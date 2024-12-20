export default defineAppConfig({
  pages: [
    //第一个路径就是主页
    'pages/index/index',
    'pages/doQuestion/index',
    'pages/result/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MBTI 性格测试',
    navigationBarTextStyle: 'black'
  }
})
