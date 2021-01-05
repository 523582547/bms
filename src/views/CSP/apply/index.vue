<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="申请单号">
        <el-input v-model="formInline.user" placeholder="请输入申请单号"></el-input>
      </el-form-item>
      <el-form-item label="申请类型">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审批状态">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请时间">
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
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号">
      </el-table-column>
      <el-table-column
        label="申请单号">
        <template slot-scope="scope">
          <span
            style="color:#409EFF;border-bottom:1px solid #409EFF;cursor:pointer;"
            @click="toDetail(scope.row)"
          >{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="province"
        label="申请时间">
      </el-table-column>
      <el-table-column
        label="申请类型">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="address"
        label="当前节点">
      </el-table-column>
      <el-table-column
        prop="province"
        label="审批结束时间">
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
      direction="rtl">
      <template slot="title">
        <div class="qhy-draw-title">
          审批信息
        </div>
      </template>
      <div style="font-size:13px;padding:0 10px;">
        <p>当前审批节点</p>
        <p>审核人</p>
        <p>审批流程</p>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import BaseExtend from '@/extends/baseExtend.js'

export default {
  extends: BaseExtend,
  methods: {
    toDetail (row) {
      this.$router.push({
        path: '/csp/apply/add'
      })
      console.log(row)
    },
    handleClick (row) {
      this.drawer = true
      console.log(row)
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
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
        path: '/csp/apply/add'
      })
    }
  },
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
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  }
}
</script>

<style lang="less">
.qhy-draw-title{
  color: #05a380;
  font-weight: bold;
  font-size: 15px;
}
</style>
