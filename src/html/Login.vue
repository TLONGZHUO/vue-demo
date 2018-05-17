<template>
  <div @keyup.space="login">
      <input type="text" id="name" v-model="userName">
      <input type="text" id="password" v-model="password"/>
    <input type="button" class="btn-success" @click="login" id="submit" value="登录"/>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
     return {
       userName: '',
       password: ''
     }
    },
    methods: {
      login: function () {
        var _body = {
          userName: this.userName,
          password: this.password
        }
        this.$http.post('/api/web/user/login',_body)
          .then((res) =>{
            if (res.data.flag == 1) {
              sessionStorage.setItem("username",this.userName)
              this.$router.push({path:'/index', query:{userInfo:_body}})
            }else {
              alert("账号或者密码错误")
            }
          })
      }
    }
  }
</script>
