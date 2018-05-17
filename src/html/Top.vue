<template>
  <div class="top col-md-12">
    <!-- 导航栏-->
    <nav class="navbar" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <span class="navbar-brand" href="#">杭州天珑珠宝网络后台管理系统</span>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">管理</a></li>
            <li><a href="#">用户</a></li>
          </ul>
        </div>
        <div>
          <ul class="nav navbar-nav pull-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                {{userName}} <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href='#' @click="quit">切换用户</a></li>
                <li><a href='#' @click="quit">退出</a></li>
                <!--<li><a href="#">EJB</a></li>-->
                <!--<li><a href="#">Jasper Report</a></li>-->
                <!--<li class="divider"></li>-->
                <!--<li><a href="#">分离的链接</a></li>-->
                <!--<li class="divider"></li>-->
                <!--<li><a href="#">另一个分离的链接</a></li>-->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'Top',
    data() {
      return {
        // userName: 'userName'
        userName: sessionStorage.getItem("username")
      }
    },
    methods: {
      quit: function () {
        sessionStorage.removeItem("username")
        this.$router.push('/')
      }
    }

  }
</script>
<style type="text/css">
  .top{
    color: whitesmoke;
    /*background: url("../assets/bg.jpg") repeat;*/
  }
  .top hr{
    margin: 0px 0px 30px 0px;
    border-color: #42b983;
  }
  a{
    color: whitesmoke;
  }

</style>
