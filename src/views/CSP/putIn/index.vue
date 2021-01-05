<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="入库仓库">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入库单号">
        <el-input v-model="formInline.user" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="入库时间">
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="onDateChange"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain icon="el-icon-search" @click="onSubmit">查询</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="add">添加</el-button>
        <el-button type="success" icon="el-icon-refresh" @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      @row-click="rowClick">
      <el-table-column
        prop="date"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="入库单号">
      </el-table-column>
      <el-table-column
        prop="province"
        label="入库时间">
      </el-table-column>
      <el-table-column
        prop="city"
        label="入库人">
      </el-table-column>
      <el-table-column
        prop="name"
        label="入库类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="入库仓库">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click="repeal(scope.row)"
            type="danger"
            size="mini"
            icon="el-icon-refresh-left"
          >撤销</el-button>
          <el-button
            @click="print(scope.row)"
            type="primary"
            size="mini"
            icon="el-icon-receiving"
          >打印</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="qhy-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    <!-- 右侧弹窗 -->
    <el-drawer
      :visible.sync="drawer"
      size="50%"
      direction="rtl">
      <template slot="title">
        <div class="qhy-draw-title">
          入库详情
        </div>
      </template>
      <div class="qhy-draw-box">
        <p>入库人<span>超级管理员</span></p>
        <p>入库时间<span>2020-04-23</span></p>
        <p class="title global-flex align"><span></span>入库明细</p>
        <el-table
          :data="tableData"
          style="width: 100%"
          @row-click="rowClick">
          <el-table-column
            prop="date"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="产品编号">
          </el-table-column>
          <el-table-column
            prop="province"
            label="产品名称">
          </el-table-column>
          <el-table-column
            prop="city"
            label="单位">
          </el-table-column>
          <el-table-column
            prop="name"
            label="入库数量">
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
      </div>
    </el-drawer>
  </div>
</template>

<script>
import BaseExtend from '@/extends/baseExtend.js'

export default {
  extends: BaseExtend,
  data () {
    return {
      drawer: false,
      date: '',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      currentPage4: 4,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路'
      }]
    }
  },
  methods: {
    rowClick (row) {
      this.drawer = true
      console.log(row)
    },
    // 撤销
    repeal (row) {
      console.log(row)
    },
    // 打印
    print (row) {
      console.log(row)
    },
    onSubmit () {
      console.log('submit')
    },
    onDateChange (value) {
      console.log(value)
    },
    // 添加
    add () {
      this.$router.push({
        path: '/csp/putin/add'
      })
    }
  }
}
</script>

<style lang="less">
.qhy-draw-box{
  font-size:13px;
  padding:0 10px;
  p{
    line-height:30px;
    span{
      padding-left:25px;
    }
  }
  .title{
    span{
      margin-right:5px;
      padding:0;
      width:5px;
      height:15px;
      background:#05A380;
      border-radius:4px;
    }
  }
}
</style>
