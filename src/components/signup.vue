<template>
    <div class="signup">
        <div class="form">
            <mt-field v-model="account" placeholder="手机号" type="email"></mt-field>
            <mt-field placeholder="验证码">
                获取验证码
            </mt-field>            
            <mt-field v-model="password" placeholder="密码（6-16位数字、字母）" type="password"></mt-field>
            
        </div>
        <mt-button @click="signup()" type="primary" class="signupBtn" size="large">注册</mt-button>
        <div class="tip">
            已有账号？
            <router-link to="/signin">
                立即登录
            </router-link>
        </div>
        <div class="agreementsTip tip">
            点击“注册”按钮，即表示您同意<a href="">《服务与隐私协议》</a>
        </div>
    </div>
</template>

<script>
import axios from '../utils/customAxios'

export default {
  name: 'entryForm',
  data () {
    return {
      account: '',
      password: '',
      URL: ''
    }
  },
  methods: {
    signup () {
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
    me.URL = '/signup'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
a {
  text-decoration: none;
}
.signup {
    height: 100%;
    padding: 60/2px 39/2px 0 40/2px;
    background: #fff;
    .form {
        border: 1px solid #BEBEBE;
        border-radius: 6/2px;
        & /deep/ .mint-field {
            border-top: 1px solid #BEBEBE;
            .mint-cell-wrapper {
                color: #D7D7D7;
                .mint-cell-value {
                    font-size: 32/2px;
                    input {
                        color: #D7D7D7;
                    }
                    .mint-field-other {
                        font-size: 26/2px;
                        color: #60B2E8;
                    }
                }
            }

        }
        .mint-field:first-child {
            border: 0;
        }
    }
    .signupBtn {
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

}
</style>
