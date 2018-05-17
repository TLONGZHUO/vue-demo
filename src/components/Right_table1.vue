<template>
  <div class="right_table1 table-responsive col-md-12">
    <table class="table table-hover table-bordered table-striped">
      <caption>{{title}}</caption>
      <thead>
      <tr class="danger">
        <th>产品</th>
        <th>付款日期</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>产品1</td>
        <td>23/11/2013</td>
        <td>待发货</td>
        <td>我独占一个</td>
      </tr>
      <tr v-for="one in msg">
        <td v-text="one.userName"></td>
        <td v-text="one.password"></td>
        <td>我是占位置的</td>
        <td><a href="#">修改</a><a href="#">删除</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Right_table1',
    data() {
      return {
        title: '页面信息',
        msg: [
          {
            userName: 'jack11111',
            password: '123456',
          },
          {
            userName: 'francis111111',
            password: '123456',
          },
          {
            userName: 'didi11111111',
            password: '123456',
          }
        ]
      }
    }
  }
</script>

<style type="text/css">
  .right_table{
    padding: 0px;
  }
  table tr:nth-child(even){
    background: #dff0d8;
  }
  table tr:nth-child(even){
    background: #f7ecb5;
  }
  table tr:nth-child:hover(even){
    background: #afd9ee;
  }
  table a{
    margin-right: 10px;
    text-decoration: none;
    color: indianred;
  }
  table a:hover{
    text-decoration: none;
    color:blue;
  }

</style>
