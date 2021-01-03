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
              <span class="title-text">舆情分析系统页面3</span>
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
         <!--   <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            > -->
			<div class="react-right ml-4" style="background-color: #252f5b;">
            <router-link :to="{name:'login'}">
			<span class="react-before"></span>
            <span class="text colorBlue">login</span>
			</router-link>
            </div>
            <div class="react-right ml-3" style="background-color: #252f5b;">
				<router-link :to="{name:'page1'}">
              <span class="text colorBlue">page1</span>
			</router-link>
            </div>
			
          </div>
          <div style="width: 40%" class="d-flex">
			<div class="react-left bg-color-blue mr-3">
				<router-link :to="{name:'page3'}">
				<span class="text fw-b">page3</span>
				</router-link>
			</div>
            <div class="react-left bg-color-blue mr-3">
			<router-link :to="{name:'page4'}">
            <span class="text fw-b">page4</span>
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
        <div class="body-box">
          <!-- 第三行数据 -->
			<div class="bototm-box">
				
					<dv-border-box-12>
						<centerRight2 />
					</dv-border-box-12>
			
			<!-- 	<div>
					
				</div> -->
				<!-- <div>
					
						 <center/>
					
				</div> -->
				
				
				 <dv-border-box-13>
				 	<cloudword/>
				 </dv-border-box-13>
				
		
      
            <!-- 中间 -->

          </div>

          <!-- 第四行数据 -->
      <!--    <div class="bototm-box">
           <dv-border-box-13>
             <bottomRight />
           </dv-border-box-13>
           <dv-border-box-12>
          
           </dv-border-box-12>
          </div> -->
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</happy-scroll>
</template>

<script>
	import centerRight2 from "../../views/centerRight2.vue";
	//import center from "../../views/center.vue"
	//import centerRight2 from "../../views/centerRight2.vue"
	//import centerLeft2 from "../../views/centerLeft2.vue"
	//import bottomLeft from "../../views/bottomLeft.vue"
	//import bottomRight from "../../views/bottomRight.vue"
	import { formatTime } from '../../utils/index.js'
	import cloudword from '../../views/cloudword.vue'
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
		 centerRight2,
		// centerRight2,
		cloudword,
	//	 bottomLeft,
		//bottomRight,
		 // center,
		// centerLeft2
	},
	mounted () {
	this.timeFn();
	this.cancelLoading();
		
		
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

<style>
</style>
