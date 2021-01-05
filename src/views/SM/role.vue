<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="danger" icon="el-icon-delete" @click="onSubmit">删除</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>
        <el-button type="success" icon="el-icon-refresh" @click="onSubmit">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="角色名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色描述">
      </el-table-column>
      <el-table-column
        prop="province"
        label="适用公司">
      </el-table-column>
      <el-table-column
        prop="city"
        label="人数">
      </el-table-column>
      <el-table-column
        prop="city"
        label="外部账户默认角色">
      </el-table-column>
    </el-table>
    <!-- dialog -->
    <el-dialog title="编辑角色" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form" label-width="130px">
        <el-form-item label="角色名称">
          <el-input v-model.trim="form.roleName" placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入角色描述"
            v-model.trim="form.roleDescription">
          </el-input>
        </el-form-item>
        <el-form-item label="适用公司">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="外部用户默认角色">
          <el-checkbox v-model="form.checked"></el-checkbox>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BaseExtend from '@/extends/baseExtend.js'

export default {
  extends: BaseExtend,
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    },
    onSubmit () {
      console.log('submit')
    }
  },
  data () {
    return {
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
