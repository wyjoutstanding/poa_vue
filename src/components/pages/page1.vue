/* eslint-disable */
<template>
<happy-scroll>
  <div id="index" style="height: 200px; overflow-y:scroll">
    <dv-full-screen-container class="bg" >
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
		  <!-- 第一行 -->
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">舆情分析系统页面1</span>
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
			<!-- 第三行 -->
			<div class="bototm-box">
				<div style="width:100%;text-align:center">
					<form>
						<div>
							<br />
							<input name="wd" id="search" type="text"
							v-model="keyWord"
								style="margin:0px;
								width: 400px;
								border-radius:9px;
								background: #ffffff;
								height: 40px;" 
								value="请输入关键词">
							<button
								type="button"
								left:100px 
								style="margin:0px;
									width: 80px;
									border-radius:5px;
									height: 30px;
									background: #ffffff;
									opacity:0.8;"
								@click="searchKeyword()"
							>立即搜索</button>
						</div>
					</form>
				</div>
				<br>
				<div style="width:100%;text-align:center">
					<font size:10px>
						信息类别：
					</font>
					<select name="信息类别" 
						id="info"
						
						>
						<option value="————">————</option>
						<option value="新闻">新闻</option>
						<option value="财经">财经</option>
						<option value="军事">军事</option>
						<option value="娱乐">娱乐</option>
						<option value="政治">政治</option>
						<option value="八卦">八卦</option>
					</select>
					
					<font size:10px>
						新闻来源：
					</font>
					<select name="新闻来源" 
						id="info"
						>
						<option value="————">————</option>
						<option value="百度">百度</option>
						<option value="微博">微博</option>
						<option value="知乎">知乎</option>
						<option value="人民网">人民网</option>
						<option value="凤凰网">凤凰网</option>
						<option value="腾讯网">腾讯网</option>
					</select>
					<p></p>
					<font>
						起始时间：
					</font>
					<input type="datetime-local">
					<font>			</font>
					
					<font>
						结束时间：
					</font>
					<input type="datetime-local">
				</div>
			</div>
			<!-- <div>
				<div class="left_box">
				<el-card >
					<div>
					<el-input placeholder="请输入内容" clearable v-model="keyWord"></el-input>
					<el-select v-model="webName" placeholder="请选择网站">
						<el-option v-for="item in webOptions" :key="item.typeKey" :label="item.typeValue" :value="item.typeKey"></el-option>
					</el-select>
					<el-select v-model="typeName" placeholder="请选择类型">
						<el-option v-for="item in typeOptions" :key="item.typeKey" :label="item.typeValue" :value="item.typeKey"></el-option>
					</el-select>
					<div class="block">
						<span class="demonstration">默认</span>
						<el-slider v-model="value1"></el-slider>
					</div>
					<div>
						<el-button icon="el-icon-search" @click="searchKeyword">搜索</el-button>
					</div>
					</div>
				</el-card>
				</div>
				<div class="right_box">
				<el-card>

				</el-card>
				</div>
			</div> -->
			<!-- 第四行 -->
			<div>
		<el-table
      :data="data_list"
	  height=1000
      style="width: 100%">
      <el-table-column
        prop="topic"
        label="主题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="summary"
        label="摘要"
        width="700">
      </el-table-column>
      <el-table-column
        prop="url"
        label="链接"
		width="250">
      </el-table-column>
    </el-table>
		<!-- <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
		width="180">
      </el-table-column>
    </el-table> -->
			</div>
			
        </div>
     
    </dv-full-screen-container>
  </div>
</happy-scroll>
</template>

<script>
	
import { formatTime } from '../../utils/index.js'
import axios from 'axios'
export default {
	data () {
		return {
			info:null,
			loading: true,
			dateDay: null,
			dateYear: null,
			dateWeek: null,
			weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
			keyWord: '',
			webOptions: [
				{
				'typeKey': 1,
				'typeValue': '新浪网',
				},
				{
				'typeKey': 2,
				'typeValue': '人民网',
				},
				{
				'typeKey': 3,
				'typeValue': '首都之窗',
				},
				{
				'typeKey': 4,
				'typeValue': '中国政府网',
				},
				{
				'typeKey': 5,
				'typeValue': '各地政府网',
				},
				{
				'typeKey': 6,
				'typeValue': '天涯社区',
				},
				{
				'typeKey': 7,
				'typeValue': '西祠社区',
				},
				{
				'typeKey': 8,
				'typeValue': '中国日报',
				},
				{
				'typeKey': 9,
				'typeValue': '新浪微博',
				},
				{
				'typeKey': 10,
				'typeValue': '百度',
				}
			],
			typeOptions: [
				{
				'typeKey': 1,
				'typeValue': '新浪网',
				},
				{
				'typeKey': 2,
				'typeValue': '人民网',
				},
				{
				'typeKey': 3,
				'typeValue': '首都之窗',
				},
				{
				'typeKey': 4,
				'typeValue': '中国政府网',
				},
				{
				'typeKey': 5,
				'typeValue': '各地政府网',
				},
				{
				'typeKey': 6,
				'typeValue': '天涯社区',
				},
				{
				'typeKey': 7,
				'typeValue': '西祠社区',
				},
				{
				'typeKey': 8,
				'typeValue': '中国日报',
				},
				{
				'typeKey': 9,
				'typeValue': '新浪微博',
				},
				{
				'typeKey': 10,
				'typeValue': '百度',
				}
			],
			webName: '',
			typeName: '',
			value1: 0,
			data_list: [],
			tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
	};
	},
	components: {
	
	},
	mounted () {
		this.timeFn();
		this.cancelLoading();
	},
	methods: {
	// 	getData() {
	// 		axios.get('http://47.100.27.31:5000/api/get_analysis_data/').then(response => {
	// 		//console.log(response.data);
	// 		this.info=response;
	// 		this.cdata.category =response.data.total_hotspot_change.x;
	// 		this.cdata.lineData=response.data.total_hotspot_change.y;
	// 		// this.drawLine('main')
	// 		}, response => {
	// 			console.log("error");
	// 		});
	// },
	searchKeyword () {
      axios({
			method:'post',
		  url:'http://47.100.27.31:5000/api/search/',
		//   url:'http://localhost:5000/api/search/',
      data:{
				// catagories:document.getElementById("searchBox").value,
				// keywords:document.getElementById("searchBox").value
				'catagories': this.keyWord,
				'keywords': this.keyWord,
			}
		})
		.then((response) => {
			console.log(response.data)
			this.data_list = response.data

			axios({
				method: 'get',
				url: 'http://47.100.27.31:5000/api/set_craw_start/'
			})
			.then((response) => {
				// this.data_list = response.data
				console.log(this.response.data)
			}) 
		  })
		  .catch(function (error) {
			console.log(error);
		})
    },
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

<style lang="less" scoped>
.left_box{
  width: 300px;
  height: 700px;
  float: left;
  padding: 20px 50px;
  background-color: #ffffff;
  z-index: 10000
}
.right_box{
  width: 700px;
  height: 700px;
  float: left;
  padding: 20px 50px;
  background-color: #ffffff;
  z-index: 10000
}
</style>
