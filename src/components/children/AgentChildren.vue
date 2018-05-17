<template>
  <div class="agentChildren table-responsive col-md-12">
    <table class="table table-hover table-bordered table-striped">
      <thead>
      <tr class="danger">
        <th colspan="10">
          <div class="col-md-2">
            <label style="color: indianred">{{this.$route.query.agentId}}</label><label>的下级代理人</label>
            <a href="#" class="pull-right" @click="back">返回上一页</a>
          </div>
          <div class="col-md-10">
            <button class="btn-warning pull-right">搜索</button>
            <input class="pull-right" type="text" placeholder="市区搜索"/>
          </div>
        </th>
      </tr>
      <tr class="danger">
        <th>子代理商用户名(标题)</th>
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
        <td><a href="#">修改</a><a href="#">删除</a><a href="#">我的子代理商</a></td>
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
        <td><a href="#">修改</a><a href="#">删除</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'AgentChildren',
    data(){
      return{
        agentId: this.$route.query.agentId,
        msg: [
          {
            username: 'ddd',
            password: 'sss'
          }
        ]
      }
    },
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    created: function () {
      // alert(this.$route.query.agentId)
    }
  }
</script>
