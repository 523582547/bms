<template>
  <div class="global-fullheight">
    <div class="global-fullheight">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="所在仓库">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="产品名称">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="关联设备">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="跨公司查询">
          <el-radio v-model="radio" label=""></el-radio>
        </el-form-item>
        <el-row>
          <el-col>
            <el-form-item>
              <el-button type="primary" plain icon="el-icon-search" @click="onSubmit">查询</el-button>
              <el-button type="success" icon="el-icon-refresh" @click="onSubmit">重置</el-button>
              <el-button type="warning" icon="el-icon-download">导入</el-button>
              <el-button type="info" icon="el-icon-upload2">导出</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="global-flex">
        <div style="width:250px;">
          <el-card class="box-card left-card">
            <div
              slot="header"
              class="global-flex bet align"
              style="color:#3c763d;"
            >
              <span>分类树</span>
            </div>
            <div class="global-flex align" style="margin-bottom:10px;">
              <p style="width:70px;">检索：</p>
              <el-input
                v-model="form.name"
                prefix-icon="el-icon-search"
                placeholder="请输入名称"
              ></el-input>
            </div>
            <el-tree
              class="filter-tree"
              show-checkbox
              :data="data"
              :props="defaultProps"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree">
            </el-tree>
          </el-card>
        </div>
        <div style="flex:1;margin-left:20px;">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="name"
              label="图片">
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
              label="分类">
            </el-table-column>
            <el-table-column
              prop="city"
              label="品牌">
            </el-table-column>
            <el-table-column
              prop="city"
              label="规格型号">
            </el-table-column>
            <el-table-column
              prop="city"
              label="所在仓库">
            </el-table-column>
            <el-table-column
              prop="city"
              label="单位">
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            class="qhy-pagination"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- dialog -->
    <el-dialog title="添加仓库" :visible.sync="dialogFormVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="上级：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="编号：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所在地：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input type="textarea" :rows="4" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },
  data () {
    return {
      radio: false,
      dialogFormVisible: false,
      filterText: '',
      form: {
        name: ''
      },
      formInline: {
        name: ''
      },
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
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
      }]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
