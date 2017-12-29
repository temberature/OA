<template>
  <div v-if="course.id" class="course">
    <div class="coverContainer">
      <div :style="{'background-image': 'url(' + course.cover + ')'}" class="blurCover"></div>
      <img class="cover" :src="course.cover" alt="">
    </div>
   
    <div class="info">
      <div class="title">
        <span class="name">
          {{course.name}}
        </span>       
      </div>
      <div class="deadline">
        报名截止至：{{course.startDate | datetime('YYYY/MM/DD')}} 
        <span class="period">
          <img v-if="course.period === 0" src="../assets/courseDetail/img/period_enrolling.png" alt="">
          <img v-else-if="course.period === 1" src="../assets/courseDetail/img/period_ongoing.png" alt="">
          <img v-else-if="course.period === 2" src="../assets/courseDetail/img/period_finish.png" alt="">
        </span>
      </div>
      <mt-cell title="报名人数" value="">
        已报{{course.entrant}}人/限制{{course.quota}}人
      </mt-cell>
      <mt-cell title="活动时间" value="">
        {{course.startDate | datetime('YYYY/MM/DD')}}-{{course.endDate | datetime('YYYY/MM/DD')}}
      </mt-cell>
      <mt-cell title="活动地点" value="" is-link>
        <icon name="icon_place" style="width: 10px;height:12px;"></icon>
        {{course.address}}
      </mt-cell>
      <mt-cell title="费用" value="">
        <template v-if="course.fee === 0">免费</template>
        <template v-else>收费</template>
      </mt-cell>
      <div class="detail">
        <template v-if="course.detail">
          {{course.detail}}
        </template>
        <template v-else>
          活动详情
        </template>
      </div>
    </div>
    <router-link :to="{path: './entryForm'}" append>
      <template v-if="course.period === 0">
        <mt-button v-if="course.enrolled" disabled class="enrollBtn" type="primary" size="large">已报名</mt-button>
        <mt-button v-if="!course.enrolled" class="enrollBtn" type="primary" size="large">立即报名</mt-button>
      </template>
    </router-link>
    
  </div>

</template>

<script>
import axios from '../utils/customAxios'
import { Indicator } from 'mint-ui'

export default {
  name: 'course',
  data () {
    return {
      course: {},
      URL: ''
    }
  },
  methods: {
    fetchData () {
      let me = this
      Indicator.open()
      axios
        .get(me.URL)
        .then(function (response) {
          Indicator.close()
          console.log(response)
          me.course = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    enroll () {
      let me = this
      axios.post(me.URL)
      .then((response) => {
        console.log(response.data.retdesc)
      })
    }
  },
  created: function () {
    let me = this
    me.URL = '/course/' + this.$route.params.id
    me.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
a {
  text-decoration: none;
}
.course {
  position: relative;
  background: #fff;
  .coverContainer {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 456/2px;
    padding: 32/2px 0;
    overflow: hidden;
    .blurCover {
      position: absolute;
      z-index: 0;
      left: -10px;
      top: -10px;
      right: -10px;
      bottom: -10px;
      background: center center no-repeat;
      background-size: 100%;
      filter: blur(3px);
    }
    .cover {
      position: relative;
      z-index: 2;
      display: block;
      width: 294/2px;
      height: 392/2px;
      margin: 0 auto;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }
  }
  
  .info {
    margin: 32/2px 40/2px 13px 38/2px;
    font-size: 26/2px;
    color: #494949;
    line-height: 105/2px;
    background: #fff;
    & /deep/ .mint-cell {
      .mint-cell-wrapper {
        padding-left: 0;
      }
    }
    .title {
      line-height: 1;
      .name {
        margin-right: 21px;
        font-size: 38/2px;
        color: #2a2a2a;
        line-height: 25px;
      }
         
    }
    .deadline {
      margin: 22/2px auto 35/2px;
      line-height: 1;
      .period {
        vertical-align: middle;
        img {
          width: 122/2px;
        }
      }
    }
    .cell {
      display: flex;
      justify-content: space-between;
      padding-right: 20/2px;
      border-top: 1px solid #E5E5E5;
      label {
        font-size: 32/2px;
        color: #494949;
      }
    }
    .time {
     
    }
    .address {
      
    }
    .quota {
      
    }
    .detail {
      min-height: 200px;
      border-top: 1px solid #E5E5E5;
    }
  }
  .enrollBtn {
    position: fixed;
    bottom: 0;
    border-radius: 0;
  }
}
</style>
