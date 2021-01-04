<template>
<happy-scroll>
  <div id="index" style="height: 200px; overflow-y:scroll">
    <dv-full-screen-container class="bg" >
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
				<div class="title">
              <span class="title-text">网络舆情分析系统</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 50%">
			<div class="react-right ml-4" style="background-color: #252f5b;">
            <router-link :to="{name:'login'}">
			<span class="react-before"></span>
            <span class="text colorBlue">登录</span>
			</router-link>
            </div>
            <div class="react-right ml-3" style="background-color: #252f5b;">
				<router-link :to="{name:'page1'}">
              <span class="text colorBlue">搜索</span>
			</router-link>
            </div>
			
          </div>
          <div style="width: 40%" class="d-flex">
			<div class="react-left bg-color-blue mr-3">
				<router-link :to="{name:'page3'}">
				<span class="text fw-b">舆情展示</span>
				</router-link>
			</div>
            <div class="react-left bg-color-blue mr-3">
			<router-link :to="{name:'page4'}">
            <span class="text fw-b">舆情分析</span>
			</router-link>
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{dateYear}} {{dateWeek}} {{dateDay}}</span>
            </div>
          </div>
        </div>
       <br/><br/><br/><br/>
<div align="center"><img src="../assets/images/intro.jpg" width="70%" height="70%"/></div> 
        <div>

            
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</happy-scroll>
</template>

<script>
	import axios from 'axios'
import { formatTime } from '../utils/index.js'

export default {
  data () {
    return {
		info:null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    //centerLeft1,
    //centerLeft2,
   // centerRight1,
    //centerRight2,
   // center,
   // bottomLeft,
    //bottomRight
  },
  mounted () {
	  // axios({
	  //     method: 'post',
	  //     url: 'http://47.100.27.31:5000/api/search/',
	  //     data: {
	  //         catagories: '新闻',
	  //         keywords: 'testtesttest'
	  //     }
	  // })
	  // .then(function (response) {
	  //     console.log(response);
	  // })
	  // .catch(function (error) {
	  //     console.log(error);
	  // });
    this.timeFn();
    this.cancelLoading();
	
	axios
		.get('http://47.100.27.31:5000/api/get_analysis_data/')
		.then(response => (this.info = response.data.total_hotspot_change.x))
	
	
  },
  methods: {
	  
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000)
    },
    cancelLoading () {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
input[type="text"] { border: none; margin-left: 5px; background: #66CCFF; opacity:0.8; }
</style>