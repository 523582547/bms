export default [
  {
    name: '备件耗材',
    icon: 'el-icon-s-order',
    children: [
      {
        path: '/csp/depot',
        name: '仓库管理'
      },
      {
        path: '/csp/apply',
        name: '领料申请'
      },
      {
        path: '/csp/putin',
        name: '入库管理'
      },
      {
        path: '/csp/putout',
        name: '出库管理'
      },
      {
        path: '/csp/warn',
        name: '库存预警'
      },
      {
        path: '/csp/manage',
        name: '基值管理'
      },
      {
        path: '/csp/book',
        name: '库存台账'
      },
      {
        path: '/csp/check',
        name: '库存盘点'
      }
    ]
  },
  {
    name: '系统管理',
    icon: 'el-icon-s-tools',
    children: [
      {
        path: '/sm/organize',
        name: '组织架构'
      },
      {
        path: '/sm/role',
        name: '角色管理'
      },
      {
        path: '/sm/flow',
        name: '流程管理'
      },
      {
        path: '/sm/backup',
        name: '数据库备份'
      }
    ]
  }
]
