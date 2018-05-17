<template>
  <div class="left col-md-12" :style="{height:leftHeight}">
    <div id="leftPanel">
      <div class="panel-group" id="accordion" role="tabList">
        <div class="panel panel-info" v-if="divControl.index">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <router-link tag="a" to="/index">首页</router-link>
              </a>
            </h4>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                供应商管理
              </a>
            </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel">
            <div class="panel-body">
              <!--<a href="/indexPic">供应商管理</a>-->
              <router-link tag="a" to="/supplierManagement">供应商管理</router-link>
            </div>
            <!--<div class="panel-body">-->
            <!--<div class="btn-group btn-group-lg" role="group">商品管理</div>-->
            <!--</div>-->
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                代理商管理
              </a>
            </h4>
          </div>
          <div id="collapseThree" class="panel-collapse collapse" role="tabpanel">
            <div class="panel-body">
              <router-link tag="a" to="/agentManagement">代理商管理</router-link>
              <!--<a href="#">代理人管理</a>-->
            </div>
          </div>
          <!--<div id="collapseThree" class="panel-collapse collapse" role="tabpanel">-->
          <!--<div class="panel-body">-->
          <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia lacinia mauris, at ultricies leo ornare nec. Vivamus eu est vel felis dignissim tempor. Nulla facilisi. Duis molestie tortor ac tempor volutpat. Phasellus nec mi aliquet, sollicitudin neque eget, consectetur libero. Vestibulum sollicitudin sapien libero, egestas tempus eros scelerisque eu.-->
          <!--</div>-->
          <!--</div>-->
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingFour">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                商品管理
              </a>
            </h4>
          </div>
          <div id="collapseFour" class="panel-collapse collapse" role="tabpanel">
            <div class="panel-body">
              <router-link tag="a" to="/goodsManagement">商品管理</router-link>
            </div>
            <div class="panel-body" v-if="divControl.goodListControl">
              <a href="#">商品分类管理</a>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingFive">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                课程管理
              </a>
            </h4>
          </div>
          <div id="collapseFive" class="panel-collapse collapse" role="tabpanel">
            <div class="panel-body">
              <!--<a hrf="#">课程管理</a>-->
              <router-link tag="a" :to="{path:'/classManagement'}">课程管理</router-link>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingSix">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                订单管理
              </a>
            </h4>
          </div>
          <div id="collapseSix" class="panel-collapse collapse" role="tabpanel">
            <div class="panel-body">
              <a href="#">订单管理</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Left',
    data() {
      return {
        divControl: {
          index: true,
          goodListControl: true
        },
        leftHeight: '300px',
        rightContent: '/index/supplierManagement'
      }
    },
    methods:{
    }
  }

</script>

<style type="text/css">
  a{
    color: cornflowerblue;
  }
  a:hover{
    text-decoration: none;
  }
</style>
