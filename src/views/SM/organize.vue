<template>
  <div class="global-fullheight">
    <el-row class="global-fullheight">
      <div style="margin-bottom: 15px">
        <el-button type="danger" icon="el-icon-delete" size="mini"
          >从部门移除人员</el-button
        >
        <el-button type="danger" icon="el-icon-delete" size="mini"
          >删除</el-button
        >
        <el-button type="primary" icon="el-icon-plus" size="mini"
          >添加部门</el-button
        >
        <el-button type="primary" icon="el-icon-plus" size="mini"
          >添加用户</el-button
        >
        <el-button type="warning" icon="el-icon-download" size="mini"
          >导入用户</el-button
        >
        <el-button type="warning" icon="el-icon-download" size="mini"
          >导入部门</el-button
        >
      </div>
      <el-col class="" style="width: 350px">
        <el-card class="box-card global-fullheight left-card">
          <div
            slot="header"
            class="global-flex bet align"
            style="color: #3c763d"
          >
            <span>组织架构树</span>
          </div>
          <el-form ref="form" :model="form" :inline="true">
            <el-form-item label="检索">
              <el-input
                v-model="form.name"
                prefix-icon="el-icon-search"
                placeholder="请输入名称"
              ></el-input>
            </el-form-item>
          </el-form>
          <el-tree
            class="filter-tree"
            show-checkbox
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree"
          >
          </el-tree>
        </el-card>
      </el-col>
      <el-col :span="12" :offset="1">
        <el-card class="box-card">
          <div
            slot="header"
            class="global-flex bet align"
            style="color: #3c763d"
          >
            <span>部门信息</span>
            <el-button type="success" icon="el-icon-refresh" size="mini"
              >更新</el-button
            >
          </div>
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="编码：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="部门信息：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="描述：">
              <el-input
                type="textarea"
                :rows="4"
                v-model="form.desc"
              ></el-input>
            </el-form-item>
            <el-form-item label="排序：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="类型：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="管理员：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <!-- dialog -->
    <el-dialog title="添加部门" :visible.sync="dialogFormVisible" width="30%">
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
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import USER from "@/api/const/user";

export default {
  data() {
    return {
      dialogFormVisible: false,
      filterText: "",
      form: {
        name: "",
      },
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        id: "orgId",
        children: "childList",
        label: "orgName",
      },
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
  mounted() {
    const form = {
      pageNum: 1,
      pageSize: 10,
    };
    this.$reqGet(USER.findOrg, form).then((res) => {
      console.log(res);
      this.data = res.data.content;
    });
  },
};
</script>

<style lang="less" scoped>
</style>
