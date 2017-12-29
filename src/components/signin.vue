<template>
    <div class="signin">
        <div class="form">
            <mt-field v-model="account" placeholder="手机号" type="email"></mt-field>
            <mt-field v-model="password" placeholder="密码" type="password"></mt-field>
        </div>
        <mt-button @click="signin()" type="primary" class="signinBtn" size="large">登录</mt-button>
        <div class="toSignupTip tip">
            <router-link to="/signup">
            快速注册
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from '../utils/customAxios'

export default {
  name: 'entryForm',
  data () {
    return {
      account: '手机号',
      password: '',
      URL: ''
    }
  },
  methods: {
    signin () {
      let me = this
      axios.post(me.URL)
      .then((response) => {
        console.log(response.data.retdesc)
        this.enrolled = true
      })
    }
  },
  created: function () {
    let me = this
    me.URL = '/signin'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
a {
  text-decoration: none;
}
.signin {
    height: 100%;
    padding: 60/2px 39/2px 0 40/2px;
    background: #fff;
    
    .form {
        border: 1px solid #BEBEBE;
        border-radius: 6/2px;
        & /deep/ .mint-field {
            border-top: 1px solid #BEBEBE;
            .mint-cell-value {
                font-size: 32/2px;
                input {
                    color: #D7D7D7;
                }
            }
        }
        .mint-field:first-child {
            border: 0;
        }
    }
    .signinBtn {
        height: 86/2px;
        margin-top: 100/2px;
    }

    .tip {
        margin-top: 60/2px;
        font-size: 26/2px;
        text-align: center;
        a {
            color: #60B2E8; 
        }
        &.agreementsTip {
            margin-top: 515/2px;
        }
    }
    .toSignupTip {
        margin-top: 703/2px;
    }       
}
</style>
