<template>
  <div class="home">
    <h1>我是{{msg}}</h1>
    <button @click='test'>我去成功了?</button>
  </div>
</template>

<script>
  export  default {
    name: 'Home',
    data (){
      return {
        msg: "Home页面"
      }
    },
    methods: {
      test: function () {
        this.$http.post('/api/web/html/leftPanel?var1=10')
          .then((res)=>{
            console.log(res.data)
          })
      }
    }
  }
</script>
