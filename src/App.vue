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
        if (['home', 'me', ''].includes(to.name)) {
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
html, body {
  height: 100%;
  background: #F4F4F4;
}
#app {
  height: 100%;
  font-family: PingFangSC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.mint-tabbar {
  .mint-tab-item {
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
}

.mint-cell {
  min-height: 103/2px;
  border-top: 1px solid #E5E5E5 ;
  .mint-cell-wrapper {
    padding: 0 38/2px;
    .mint-cell-title {
      display: flex;
      .svg-icon {
        margin-right: 19/2px;
      }

    }
    .mint-cell-value {
      font-size: 26/2px;
      color: #9B9B9B;
      input, span {
        color: #ccc;
      }
      .svg-icon {
        margin-right: 12/2px;
      }    
      &.is-link {
        margin-right: 19/2px;
      }
    }
  }
}
.mint-field.is-nolabel .mint-cell-title {
  display: none;
}
.mint-button {
  height: 96/2px;
  font-size: 34/2px;
  &.mint-button--default {
    color: #494949;
    background: #fff;
  }
  &.mint-button--primary {
    background: #FF691E;
  }
  &.is-disabled {
    background: #C9C9C9;
    opacity: 1;
  }
}

</style>
