<template>
    <div class="user">
        <main>
            <router-link to="/me/courses">
              <mt-cell title="帮助与反馈" is-link>
                  <span></span>
              </mt-cell>
            </router-link>
            <mt-button class="loginoutBtn" type="default" size="large">退出登录</mt-button>
        </main>
    </div>
</template>

<script>
import axios from '../utils/customAxios'
import Course from './course'

export default {
  name: 'user',
  data () {
    return {
      busy: false,
      user: {},
      baseURL: '/user',
      filterURL: '/user',
      URL: '/user',
      page: 0,
      type: 0,
      loading: false,
      selected: 'tab2'
    }
  },
  components: {
    Course
  },
  methods: {
    loginout () {
      let me = this
      me.URL = me.baseURL + '/0'
      me.loading = true
      axios
        .get(me.URL)
        .then(function (response) {
          console.log(response)
          me.loading = false
          me.user = response.data.data.user
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  created: function () {
    let me = this

    me.loginout()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
img {
    max-width: 100%;
}
a {
  color: #494949;
  text-decoration: none;
}

& /deep/ .mint-cell {
  .mint-cell-wrapper {
    padding: 0 40/2px;
  }
}
.loginoutBtn {
  margin-top: 20/2px;
  border-radius: 0;
}
</style>
