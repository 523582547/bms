<template>
  <div class="global-else-wrap">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      id="qhy-base-tags"
      @tab-click="handleClick"
      @edit="handleTabsEdit"
    >
      <el-tab-pane label="领料申请" name="1"></el-tab-pane>
      <el-tab-pane label="添加申请单" name="2" closable></el-tab-pane>
    </el-tabs>
    <el-main class="else-page-wrap">
      <div class="global-wrapper global-bgfff">
        <p class="title">基本信息</p>
        <el-row>
          <el-col :span="20">
            <table class="top-table">
              <tr>
                <td>申请人</td>
                <td>超级管理员</td>
                <td>申请类型</td>
                <td>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      label="维修"
                      :value="1">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td>关联单号</td>
                <td colspan="3" style="padding:20px;"></td>
              </tr>
              <tr>
                <td>备注</td>
                <td colspan="3" style="padding:0;">
                  <textarea
                    name=""
                    id=""
                    style="width:100%;height:100%;border:none;outline:none;"
                    rows="5"
                  ></textarea>
                </td>
              </tr>
            </table>
          </el-col>
        </el-row>
        <p class="title">领料信息</p>
        <div style="margin-bottom:10px;">
          <el-button type="primary" icon="el-icon-plus" size="mini">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="序号"
            width="80">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="产品编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="产品名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="单位">
          </el-table-column>
          <el-table-column
            prop="name"
            label="规格型号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="品牌">
          </el-table-column>
          <el-table-column
            prop="name"
            label="申请数量">
          </el-table-column>
        </el-table>
        <p class="title">相关附件</p>
        <el-row>
          <el-col :span="10">
            <el-input :readonly="true">
              <template slot="prepend">
                <el-button
                  type="warning"
                  icon="el-icon-upload"
                  size="mini"
                  style="color:#fff;background:#E6A23C;"
                >上传</el-button>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <div style="margin-top:30px;" class="global-flex center">
          <el-button type="success" size="large" style="width:100px;">提交</el-button>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      editableTabsValue: '2',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleClick (tab) {
      if (tab.name === '1') {
        this.$router.push({
          path: '/csp/apply'
        })
      }
    },
    handleTabsEdit (targetName, action) {
      if (action === 'remove') {
        this.$router.push({
          path: '/csp/apply'
        })
      }
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="less">
.top-table,.top-table tr th, .top-table tr td{
  border:1px solid #ccc;
}
.top-table{
  border-collapse: collapse;
}
.top-table{
  width:100%;
  // border-color:#ccc;
  // border-color:#b6ff00;
  // border-collapse: collapse;
  td{
    padding:5px 20px;
    font-size:13px;
  }
}
.title{
  margin:10px 0;
  font-size:13px;
  color:#05A380;
  font-weight:bold;
}
</style>
