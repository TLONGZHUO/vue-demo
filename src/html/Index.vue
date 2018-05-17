<template>
  <div class="index">

    <top></top>
    <div class="row ">
      <!-- 顶部栏 -->
      <div class="col-md-2">
        <!-- 左侧导航栏 -->
        <left></left>
      </div>
      <div class="col-md-10">
        <!-- 右侧内容栏 -->
        <right></right>
      </div>
    </div>

  </div>

</template>

<script>
  import Right from './Right';
  import Left from './Left'
  import Top from './Top'
  export default {
    name: 'Index',
    components: {Top,Left,Right},
    data (){
      return{

      }

    },
    methods: {

    },
    created: function () {
      var username = sessionStorage.getItem("username");
      if (username==null){
        alert("请先登录")
        this.$router.push({name:'Login', query:{no:'error'}})
      }
    }
  }

</script>

<style type="text/css">
/*去除圆角*/
.navbar {
margin: 0;
 -webkit-border-radius: 0;
 -moz-border-radius: 0;
border-radius: 0;
}
.col-md-2{
  padding-right: 0;
  padding-left: 0;
  width: 14%;
}
.col-md-10 {
  padding-left: 0;
}

</style>

