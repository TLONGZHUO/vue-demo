<template>
  <div class="agentManagement table-responsive col-md-12">
    <table class="table table-hover table-bordered table-striped">
      <caption>{{title}}</caption>
      <thead>
      <tr class="danger">
        <th colspan="10">
          <label class="pull-left">代理商列表</label>

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
      <tr>
        <td>francis</td>
        <td>23/11/2013</td>
        <td>待发货</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>
          <a href="#">修改</a><a href="#">删除</a>
         <a href="#">我是特殊的</a>
        </td>
      </tr>
      <tr v-for="one in msg">
        <td v-text="one.username"></td>
        <td v-text="one.password"></td>
        <td>我是占位置的</td>
        <td>我是占位置的</td>
        <td>我是占位置的</td>
        <td>我是占位置的</td>
        <td>我是占位置的</td>
        <td>我是占位置的</td>
        <td>我是占位置的</td>
        <td>
          <a href="#">修改</a><a href="#">删除</a>
          <router-link tag="a" :to="{path:'/agentManagement/agentChildren',query:{agentId:one.id}}">我的子代理商</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'AgentManagement',
    data(){
      return{
        title: '代理商管理=>代理商列表',
        msg:[
          {
            id: 'qqq',
            username: 'jjj',
            password: 'ddd'
          }
        ],
        selected: 0,
        all:[
          {
            name: '河南',
            value: 1
          },
          {
            name: '河北',
            value: 2
          },
          {
            name: '山西',
            value: 3
          }
        ]
      }
    },
    methods: {

    }
  }
</script>
