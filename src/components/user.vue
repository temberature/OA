<template>
    <div class="user">
        <header>
            <img class="avatar" src="../assets/user/img/avatar_default.png" alt=""> {{user.phone}}
        </header>
        <main>
            <router-link to="/me/courses">
              <mt-cell title="我的活动" is-link>
                  <span></span>
                  <icon slot="icon" name="icon_course" style="width: 16px;height:16px;"></icon>
              </mt-cell>
            </router-link>
            <mt-cell title="邀请好友" is-link>
                <span></span>
                <icon slot="icon" name="icon_invite" style="width: 16px;height:16px;"></icon>
            </mt-cell>
            <mt-cell title="关于OA" is-link>
                <span></span>
                <icon slot="icon" name="icon_about" style="width: 16px;height:16px;"></icon>
            </mt-cell>
            <router-link to="/setting">
              <mt-cell title="设置" is-link>
                  <span></span>
                  <icon slot="icon" name="icon_setting" style="width: 16px;height:16px;"></icon>
              </mt-cell>
            </router-link>
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
    readMe () {
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
    },
    filter (type) {
      let me = this
      me.type = type
      if (type === 0) {
        me.filterURL = me.baseURL
      } else if (type === 1) {
        me.filterURL = me.baseURL + '?period=1'
      } else {
        me.filterURL = me.baseURL + '?type=' + --type
      }

      me.page = 0
      me.courses = []
      me.readMe()
    }
  },
  created: function () {
    let me = this

    me.readMe()
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
header {
  box-sizing: border-box;
  min-height: 198px;
  padding: 91/2px 0 94/2px;
  font-size: 30/2px;
  color: #fff;
  line-height: 42/2px;
  text-align: center;
  background: url(../assets/user/img/avatar-bg.png);
  .avatar {
      display: block;
      width: 156/2px;
      margin: 0 auto;
      padding: 0 0 13/2px;
  }
}

& /deep/ .mint-cell {
  .mint-cell-wrapper {
    padding: 0 40/2px;
  }
  // .mint-cell-value {
  //   input, span {
  //     color: #ccc;
  //   }
  //   &.is-link {
  //     margin-right: 19/2px;
  //   }
  // }
}
</style>
