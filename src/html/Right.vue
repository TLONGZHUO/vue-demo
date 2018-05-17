<template>
  <div class="right col-md-12">
    <!--<right_table></right_table>-->
    <transition name="slide-fade">
    <router-view/>
    </transition>
  </div>
</template>
<script>
  // import SupplierManagement from '../components/supplierManagement'
  export default {
    name: "Right",
    // components: {SupplierManagement},
    data (){
      return {
        msg: "测试页面"
      }
    },
    methods: {
      loading: function (a) {
        this.loading = a
      }
    }
  }
</script>

<style>


</style>
