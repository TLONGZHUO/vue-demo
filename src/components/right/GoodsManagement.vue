<template>
  <div class="goodsManagement table-responsive col-md-12">
    <table class="table table-hover table-bordered table-striped">
      <caption>{{title}}</caption>
      <thead>
      <tr>
        <td colspan="11">
          <button class="btn-warning pull-right">搜索</button>
          <input class="pull-right" type="text" placeholder="发布人"/>
          <input class="pull-right" type="text" placeholder="商品编码"/>
          <select class="sel1 pull-right">
            <option>审核状态</option>
            <option>未审核</option>
            <option>已审核</option>
          </select>
          <select class="sel1 pull-right">
            <option>商品状态</option>
            <option>展示状态</option>
            <option>锁定状态</option>
            <option>已结缘</option>
          </select>
        </td>
      </tr>
      <tr class="danger">
        <th>商品名称</th>
        <th>商品图片</th>
        <th>商品标号</th>
        <th>当前状态</th>
        <th>商品价格</th>
        <th>商品星级</th>
        <th>发布时间</th>
        <th>发布人电话</th>
        <th>发布人</th>
        <th>是否审核</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>商品0001</td>
        <td>23/11/2013</td>
        <td>待发货</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>我独占一个</td>
        <td>
          <a href="#">修改</a><a href="#">删除</a>
          <router-link tag="a" :to="{path:'/goodsManagement/audit'}">审核</router-link>
        </td>
      </tr>
      <tr v-for="one in msg">
        <td v-text="one.goodsCode"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td v-text="one.goodsName"></td>
        <td>我是占位置的</td>
        <td>
          <a href="#">修改</a><a href="#">删除</a>
          <router-link tag="a" :to="{path:'/goodsManagement/audit',query:{goodsId:one.id}}">审核</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'GoodsManagement',
    data(){
      return{
        title: '商品管理',
        msg: [
          {
            id: '1',
            goodsCode: '001',
            goodsName: '哈哈'
          }
        ]
      }
    }
  }
</script>
