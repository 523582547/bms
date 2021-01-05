<template>
  <div id="wraper">
    <router-view />
  </div>
</template>

<style lang="less">
*{
  box-sizing: border-box;
}
body,p,ul{
  margin:0;
}
input{
  border: none;
  outline: none;
}
ul {
  padding-left:0;
}
a{
  text-decoration: none;
}
#wraper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
// text
.global-tc{
  text-align:center;
}
// flex
.global-flex{
  display:flex;
}
.global-flex.align{
  align-items: center;
}
.global-flex.bet{
  justify-content: space-between;
}
.global-flex.around{
  justify-content: space-around;
}
.global-flex.center{
  justify-content: center;
}
// bg
.global-bgfff{
  background:#fff;
}
// style
.global-wrapper{
  padding:15px;
}
#app .else-page-wrap{
  padding:15px;
  flex:1;
}
.global-else-wrap{
  flex:1;
  display:flex;
  flex-direction: column;
}
.box-card .el-card__header{
  padding:10px 20px;
  font-size:14px;
  background:#dff0d8;
}
.box-card.el-card{
  border:none;
}
.left-card .el-card__header{
  background:#d9edf7;
}
.global-fullheight{
  height:100%;
}
</style>
