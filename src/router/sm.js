export default [
  {
    path: '/sm/organize',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/SM/organize.vue'),
    meta: {
      name: '组织架构'
    }
  },
  {
    path: '/sm/role',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/SM/role.vue'),
    meta: {
      name: '角色管理'
    }
  },
  {
    path: '/sm/flow',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/SM/flow.vue'),
    meta: {
      name: '流程管理'
    }
  },
  {
    path: '/sm/backup',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/SM/backup.vue'),
    meta: {
      name: '数据库备份'
    }
  }
]
