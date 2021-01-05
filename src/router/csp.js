export default [
  {
    path: '/csp/depot',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/depot.vue'),
    meta: {
      name: '仓库管理'
    }
  },
  {
    path: '/csp/apply',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/apply/index.vue'),
    meta: {
      name: '领料申请'
    }
  },
  {
    path: '/csp/apply/add',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/apply/add.vue'),
    meta: {
      name: '添加领料申请',
      isSub: true
    }
  },
  {
    path: '/csp/putin',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/putIn/index.vue'),
    meta: {
      name: '入库管理'
    }
  },
  {
    path: '/csp/putin/add',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/putIn/add.vue'),
    meta: {
      name: '创建入库单',
      isSub: true
    }
  },
  {
    path: '/csp/putout',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/putOut/index.vue'),
    meta: {
      name: '出库管理'
    }
  },
  {
    path: '/csp/putout/add',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/putOut/add.vue'),
    meta: {
      name: '创建出库单',
      isSub: true
    }
  },
  {
    path: '/csp/warn',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/warn/index.vue'),
    meta: {
      name: '库存预警'
    }
  },
  {
    path: '/csp/warn/add',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/warn/add.vue'),
    meta: {
      name: '发起采购',
      isSub: true
    }
  },
  {
    path: '/csp/manage',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/manage/index.vue'),
    meta: {
      name: '基值管理'
    }
  },
  {
    path: '/csp/book',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/book.vue'),
    meta: {
      name: '库存台账'
    }
  },
  {
    path: '/csp/check',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/check/index.vue'),
    meta: {
      name: '库存盘点'
    }
  },
  {
    path: '/csp/check/add',
    component: () => import(/* webpackChunkName: "index.page" */ '@/views/CSP/check/add.vue'),
    meta: {
      name: '创建盘点单',
      isSub: true
    }
  }
]
