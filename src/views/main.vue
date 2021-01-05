<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <el-container id="allbox" style="height: 100%;">
        <el-container id="#content">
          <!-- left -->
          <aside id="aside">
            <!-- logo -->
            <div class="el-menu-item left-logo">
              <img v-if="this.isCollapse" src="http://imgapp.qdrsd.cn/xhh5/Jhb/logo.png" width="30" height="30" />
              <p v-if="this.isCollapse === false">危险品管理系统</p>
            </div>
            <!-- menu -->
            <el-menu
              :default-active="defaultActive"
              @select="menuSelected"
              unique-opened
              :collapse="isCollapse"
              id="leftmenu"
              class="el-menu-vertical-demo"
            >
              <template v-for="(item, index) in navs">
                <el-submenu
                  :key="index"
                  :index="index+''"
                  v-if="item.children"
                >
                  <template slot="title">
                    <i :class="item.icon" v-if="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                  </template>
                  <!-- one level -->
                  <template v-for="(im) in item.children">
                    <el-menu-item
                      :index="im.path"
                      :key="im.path"
                      v-if="!im.children"
                    >
                      <i :class="im.icon" v-if="item.icon"></i>
                      <span slot="title">{{im.name}}</span>
                    </el-menu-item>
                    <el-submenu
                      :index="im.path"
                      :key="im.path"
                      v-if="im.children"
                    >
                      <span slot="title">{{im.name}}</span>
                      <!-- two level -->
                      <template v-for="(im1) in im.children">
                        <el-menu-item
                          :index="im1.path"
                          :key="im1.path"
                          v-if="!im1.children"
                        >
                          <i :class="im1.icon"></i>
                          <span slot="title">{{im1.name}}</span>
                        </el-menu-item>
                        <el-submenu
                          :index="im1.path"
                          :key="im1.path"
                          v-if="im1.children"
                        >
                          <span slot="title">{{im1.name}}</span>
                          <!-- three level -->
                          <template v-for="(im2) in im1.children">
                            <el-menu-item :index="im2.path" :key="im2.path" v-if="!im2.children">
                              <span slot="title">{{im2.name}}</span>
                            </el-menu-item>
                          </template>
                        </el-submenu>
                      </template>
                    </el-submenu>
                  </template>
                </el-submenu>
                <!-- only one level -->
                <el-menu-item
                  :key="item.path"
                  :index="item.path"
                  v-if="!item.children"
                >
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>
            </el-menu>
          </aside>
          <!-- right -->
          <el-container>
            <el-header id="header" class="global-flex bet align">
              <div style="margin-left:-24px;">
                <li class="el-menu-item" v-if="this.isCollapse === false">
                  <i
                    class="el-icon-s-fold collapse-icon"
                    @click.prevent="collapse"
                    v-show="isCollapse === false"
                    title="收起"
                  ></i>
                </li>
                <li class="el-menu-item collapse-icon" v-else>
                  <i
                    class="el-icon-s-unfold"
                    @click.prevent="collapse"
                    v-show="isCollapse === true"
                    title="展开"
                  ></i>
                </li>
              </div>
              <el-dropdown>
                <span class="el-dropdown-link" style="color:#fff;">
                  超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>编辑用户信息</el-dropdown-item>
                  <el-dropdown-item>修改用户密码</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-header>
            <div class="qhy-tag global-bgfff" v-if="showTags">
              <span class="active">{{metaName}}</span>
            </div>
            <el-main id="main" v-if="showTags">
              <div class="global-bgfff global-wrapper">
                <router-view />
              </div>
            </el-main>
            <div v-else class="global-else-wrap" style="background:#eef1f6;">
              <router-view/>
            </div>
          </el-container>
        </el-container>
      </el-container>
    </transition>
  </div>
</template>
<script>
import navs from '@/libs/navs'

export default {
  data () {
    return {
      metaName: '',
      navs: navs,
      isCollapse: false
    }
  },
  computed: {
    showTags () {
      if (this.$route.meta.isSub) {
        return false
      }
      return true
    },
    defaultActive () {
      try {
        if (this.$route.meta.isSub) {
          const arr = this.$route.path.split('/')
          arr.pop()
          return arr.join('/')
        }
        return this.$route.path
      } catch (e) {
        return this.$route.path
      }
    }
  },
  watch: {
    $route (route) {
      this.metaName = route.meta.name
    }
  },
  created () {
    this.metaName = this.$route.meta.name
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    menuSelected (path) {
      if (this.$route.fullPath !== path) {
        this.$router.push({ path })
      }
    }
  }
}
</script>
<style lang="less">
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
#content {
  position: relative;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
}
#header .collapse-icon {
  font-size: 26px;
  color: #fff;
}
#header {
  background:#409eff;
}
#header .el-menu-item:hover{
  background:#409eff;
}
#leftmenu {
  border-right: 1px solid #eee;
  height: calc(100% - 60px);
  background-color: #fff;
}
#app .el-menu-item.left-logo{
  padding:0;
  height:60px;
  background-color: #409eff;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 10px;
  }
  p {
    letter-spacing: 3px;
  }
}
#app #leftmenu .el-menu-item {
  color: #2c3e50;
  background-color: #fff;
}
#app #leftmenu .el-menu-item:hover {
  color: #409eff;
}
#app #leftmenu .el-menu-item.is-active {
  color: #fff;
  background-color: #409eff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 201px;
}
#app .el-menu-item.collapse-icon .el-icon-s-unfold {
  font-size: 28px;
  color:#fff;
}
#main{
  padding:15px;
  background:#eef1f6;
}
#main>div,
.else-page-wrap>div{
  height:100%;
  overflow:auto;
}
.qhy-tag{
  padding-left:16px;
  height:35px;
  border-bottom: 1px solid #E4E7ED;
  span{
    display:inline-block;
    padding:0 11px;
    height:28px;
    line-height:28px;
    margin-top:7px;
    font-size:12px;
    color:#555;
  }
  span.active{
    background:#eef1f6;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
#app .el-pagination.qhy-pagination{
  margin-top:15px;
  text-align:right;
}
#app .el-table th{
  background: #f5f7fa;
}
#app .el-table th>.cell{
  font-weight: bold;
  color:#303133;
}
#app .el-form--inline .el-form-item{
  margin-right:30px;
}
#qhy-base-tags{
  padding-left:16px;
  background:#fff;
  border:1px solid #E4E7ED;
}
#qhy-base-tags .el-tabs__header{
  padding-top:7px;
  margin:0;
  margin-bottom:-1px;
}
#qhy-base-tags .el-tabs__item{
  padding:0 11px;
  height:28px;
  line-height:28px;
  font-size:12px;
  color:#555;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#qhy-base-tags .el-tabs__item.is-active{
  background:#eef1f6;
  border-bottom-color:#eef1f6;
}
#qhy-base-tags .el-tabs__header .el-tabs__nav{
  border:none;
}
</style>
