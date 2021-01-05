<template>
  <div class="global-else-wrap">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      id="qhy-base-tags"
      @tab-click="handleClick"
      @edit="handleTabsEdit"
    >
      <el-tab-pane label="出库管理" name="1"></el-tab-pane>
      <el-tab-pane label="创建出库单" name="2" closable></el-tab-pane>
    </el-tabs>
    <el-main class="else-page-wrap">
      <div class="global-wrapper global-bgfff">
        <p class="title">出库单基本信息</p>
        <el-row>
          <el-col :span="20">
            <table class="top-table">
              <tr>
                <td>出库仓库</td>
                <td>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      label="维修"
                      :value="1">
                    </el-option>
                  </el-select>
                </td>
                <td>出库时间</td>
                <td>2020-12-04</td>
              </tr>
              <tr>
                <td>出库类型</td>
                <td colspan="3" style="padding:20px;">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      label="维修"
                      :value="1">
                    </el-option>
                  </el-select>
                </td>
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
        <p class="title">出库单明细</p>
        <div style="margin-bottom:10px;">
          <el-button type="primary" icon="el-icon-plus" size="mini">手动添加</el-button>
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
            label="出库数量">
          </el-table-column>
          <el-table-column
            prop="name"
            label="单价">
          </el-table-column>
          <el-table-column
            prop="name"
            label="总价">
          </el-table-column>
        </el-table>
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
          path: '/csp/putout'
        })
      }
    },
    handleTabsEdit (targetName, action) {
      if (action === 'remove') {
        this.$router.push({
          path: '/csp/putout'
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
