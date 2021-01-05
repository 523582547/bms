<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-button size="large" type="success" icon="el-icon-s-promotion">备份到服务器</el-button>
        <el-button size="large" type="primary" icon="el-icon-folder">备份到本地</el-button>
      </el-form-item>
      <el-row>
        <el-form-item label="是否启用定时备份：">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备份周期：">
          <el-input placeholder="请输入内容" v-model="form.input3" class="input-with-select">
            <template slot="append">
              <el-select v-model="form.select" placeholder="请选择" style="width:100px;">
                <el-option label="每年" value="1"></el-option>
                <el-option label="每月" value="2"></el-option>
                <el-option label="每日" value="3"></el-option>
                <el-option label="每时" value="4"></el-option>
                <el-option label="每分" value="5"></el-option>
                <el-option label="每秒" value="6"></el-option>
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="文件删除周期(天)：">
          <el-input v-model="form.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" icon="el-icon-check">保存</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号">
      </el-table-column>
      <!-- <el-table-column label="序号">
        <template slot-scope="scope">{{(scope.$index + 1)+((searchForm.pageIndex-1) * pagination.size)}}</template>
      </el-table-column> -->
      <el-table-column
        prop="name"
        label="备份名称">
      </el-table-column>
      <el-table-column
        prop="province"
        label="文件大小">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-download">
            下载
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            size="small"
            icon="el-icon-delete">
            删除
          </el-button>
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
  </div>
</template>

<script>
import BaseExtend from '@/extends/baseExtend.js'

export default {
  extends: BaseExtend,
  data () {
    return {
      form: {
        input: '',
        select: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>
