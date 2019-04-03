//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/education', (req, res) => {
  return {
    data: {
      name:'王博文',
      age:'21',
      number:'17857026383',
      introduce:'我叫王博文，现就读于浙江万里学院'

    }
  }
})
