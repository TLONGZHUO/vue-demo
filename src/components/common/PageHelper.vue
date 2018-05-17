<template>
  <!-- v-bind 'setting' data to config page bar -->
  <!-- bind event 'page-change' to receive page info change -->
  <v-page :setting="pageSet" @page-change="pageChange">
  </v-page>
</template>
<script>
  import * as axios from "axios";
  export default {
    name: 'PageHelper',
    props: ['uri','reqData'],
    data(){
      return {
        pageSet: {
          totalRow: 0,//required option
          language: 'cn',//default: 'cn'
          pageSizeMenu: [10, 20, 50, 100]//default: [10, 20, 50, 100]
        }
      }
    },
    methods:{
      //receive page info change callback
      pageChange(pInfo){
        this.reqData.pageSize = pInfo.pageSize
        this.reqData.pageNumber = pInfo.pageNumber
        let that = this;
        console.log(pInfo);//{pageNumber: 1, pageSize: 10}
        //for example, do some http request, get new data and update totalRow property
        axios({
          method: 'post',
          url: this.uri,
          data: this.reqData,
        }).then(function(resp){
          console.log(resp)
          that.pageSet.totalRow = 100;
          console.log(that.pageSet.totalRow)
        });
      }
    }
  };
</script>
