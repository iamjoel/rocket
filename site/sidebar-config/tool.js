const PREFIX = 'tool'

const config = [
  {
    type: 'doc',
    label: '工具',
    id: `${PREFIX}/intro`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'category',
        label: '启动器',
        items: [
          {
            type: 'doc',
            label: 'Start Kit 介绍',
            id: `${PREFIX}/glue/script-kit/intro/readme`,
          },
          {
            type: 'doc',
            label: 'Start Kit 特性',
            id: `${PREFIX}/glue/script-kit/feature/readme`,
          },
        ]
      },
      {
        type: 'category',
        label: '前端',
        items: [
          {
            type: 'doc',
            label: '网站',
            id: `${PREFIX}/frontend/site`,
          },
        ]

      }
    ]
  }
]

// export default config

module.exports = config