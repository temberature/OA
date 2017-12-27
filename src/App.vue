<template>
    <div id="app">
        <router-view/>
        <mt-tabbar v-if="isTab" v-model="selected" :fixed="true">
            <mt-tab-item id="home">
                <icon slot="icon" name="icon_home" style="width: 18px;height:16px;"></icon> OA学院
            </mt-tab-item>
            <mt-tab-item id="me">
                <icon slot="icon" name="icon_me" style="width: 14px;height:16px;"></icon> 个人中心
            </mt-tab-item>
        </mt-tabbar>        
    </div>
</template>

<script>
  import 'normalize.css'
  export default {
    name: 'app',
    data () {
      return {
        isTab: true,
        selected: 'home'
      }
    },
    watch: {
      selected (value) {
        this.$router.push(value)
      }
    },
    created: function () {
      let me = this
      if (['home', 'me', ''].includes(me.$route.name)) {
        me.isTab = true
        me.selected = me.$route.name || 'home'
      } else {
        me.isTab = false
      }
      me.$router.beforeEach((to, from, next) => {
        if (['home', 'me'].includes(to.name)) {
          me.isTab = true
        } else {
          me.isTab = false
        }
        next()
      })
    }
  }
</script>

<style lang="less">
body {
    background: #F4F4F4;
}
#app {
    font-family: PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.mint-tabbar /deep/ .mint-tab-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #CACACA;
  padding: 32/2px 0 34/2px;
  color: #C0CBDE;
  background: #fff;
  .mint-tab-item-icon {
    display: flex;
    width: initial;
    height: initial;
    margin: 0 8/2px 0 0;
    img {
      width: initial;
      height: 32/2px;
    }
  }
  .mint-tab-item-label {
    font-size: 32/2px;
  }
  &:first-child {
    border-right: 1px solid #CACACA;
  }
  &.is-selected {
    color: #0B0B0B;
    background: #fff;
  }
}
</style>
