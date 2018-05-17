<template>
  <div class="SupplierManagement table-responsive col-md-12">
    <table class="table table-hover table-bordered table-striped">
      <caption>{{title}}</caption>
      <thead>
      <tr class="danger">
        <th colspan="10">
          <label class="pull-left">
            <router-link tag="button" class="btn btn-success" :to="{path:'/supplierManagement/add'}">注册用户</router-link>
          </label>

          <button class="btn-warning pull-right">搜索</button>
          <input class="pull-right" type="text" placeholder="用户名"/>
          <select class="sel1 pull-right">
            <option>搜索条件</option>
            <option>用户名</option>
            <option>用户编码</option>
          </select>
          <select class="sel1 pull-right">
            <option>认证状态</option>
            <option>未认证</option>
            <option>已认证</option>
          </select>
          <select class="sel1 pull-right">
            <option>时间区间</option>
            <option>一天内</option>
            <option>一周内</option>
          </select>

        </th>
      </tr>
      <tr class="danger">
        <th>用户名(标题)</th>
        <th>真实姓名</th>
        <th>用户编码</th>
        <th>昵称</th>
        <th>性别</th>
        <th>用户类型</th>
        <th>E签宝认证状态</th>
        <th>后台认证状态</th>
        <th>注册时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="one in msg">
        <td v-text="one.userName"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td v-text="one.password"></td>
        <td>
          <router-link tag="a" :to="{path:'/supplierManagement/update',query:{userId:one.userId}}">修改</router-link>
          <a href="#">删除</a>
          <a href="#">认证</a>
        </td>
      </tr>
      <tr>
        <td colspan="10"><page-helper :uri="uri" :reqData="reqData"></page-helper></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import PageTemplate from "../common/PageTemplate";
  import PageHelper from "../common/PageHelper";
  export default {
    name: 'SupplierManagement',
    components: {PageHelper, PageTemplate},
    data() {
      return {
        title: '供应商管理->供应商列表',
        uri: 'api/app/user/login',
        reqData:{
          userName: 'francis',
          password: '123456',
          pageSize: '10',
          pageNumber: '0'
        },
        msg: [
          {
            userName: 'jack',
            password: '123456',
          },
          {
            userName: 'francis',
            password: '123456',
          },
          {
            userName: 'didi',
            password: '123456',
          }
        ]
      }
    }

  }
</script>

<style type="text/css">
  .SupplierManagement{

    padding: 0px;
  }


</style>
