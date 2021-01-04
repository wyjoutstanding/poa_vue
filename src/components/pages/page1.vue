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
         <!--   <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            > -->
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
						<option value="全选">全选</option>
						<option value="新闻">新闻</option>
						<option value="财经">财经</option>
						<option value="军事">军事</option>
						<option value="娱乐">娱乐</option>
						<option value="政治">政治</option>
						<option value="八卦">八卦</option>
					</select>
					<font size:10px>
						请选择阈值：
					</font>
					<input 
						type="number"
						min="0"
						max="100"
						>
					<font size:10px>
						新闻来源：
					</font>
					<select name="新闻来源" 
						id="info"
						>
						<option value="全选">全选</option>
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
			<p><br><br></p>
			
			<div class="table-wrapper" 
			ref="tableWrapper" 
				v-loading="loading" 
				style="width:100%;
					text-align:center">
			<!--	<el-table
					:data="data_list"
					height=1000
					stripe=true
					border=true
					max-height="300"

					:show-header="showHeader"
					
					margin-left:-5px
					size="medium"
					text-align="left"
					:cell-style="rowClass"  :header-cell-style="headClass"
					style="width: 100%">
					<template slot="empty">
						<p>{{dataText}}</p>
					</template>
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
				</el-table> -->
				
				
			
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
		<div class="d-flex jc-center body-box">
			
	  		<dv-scroll-board :config="config" style="width:85%;height:350px"  />
			</div>
     	<!-- <page1com v-bind:test_data="test_data1"> </page1com> -->
    </dv-full-screen-container>
  </div>
</happy-scroll>
</template>

<script>
// import page1com from '../../views/page1_com'
import { formatTime } from '../../utils/index.js'
import axios from 'axios'
export default {
	data () {
		return {
			config: {
	        header: ['标题', '摘要', '链接'],
			data:[
    // ["12", '行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2', '行1列3'],
    // ['行2列1', '行2列2', '行2列3行1列2行1列2行1列2行1列2行1列2行1列2'],
    // ['行3列1', '行3列2', '行3列3'],
    // ['行4列1', '行4列2', '行4列3'],
    // ['行5列1', '行5列2', '行5列3'],
    // ['行6列1', '行6列2', '行6列3'],
    // ['行7列1', '行7列2', '行7列3'],
    // ['行8列1', '行8列2', '行8列3'],
    // ['行9列1', '行9列2', '行9列3'],
    // ['行10列1', '行10列2', '行10列3']
  ],
			
	        rowNum: 10, //表格行数
	        headerHeight: 80,
	        headerBGC: "#0f1325", //表头
	        oddRowBGC: "#'#003B51'", //奇数行
	        evenRowBGC: "#0A2732", //偶数行
			indexHeader:'序号',
	        index: true,
	        columnWidth: [50],
	        align: ["center"],
			carousel: 'page'
	      },
			showHeader: false,
			test_data1:"hellowrod",
			tableH: 0,
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
	// page1com
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
		resetHeight() {
        return new Promise((resolve, reject) => {
          this.tableH = 0
          resolve()
        })
      },
      // 设置table高度
      fetTableHeight() {
        this.resetHeight().then(res => {
          this.tableH = this.$refs.tableWrapper.getBoundingClientRect().height - 10
        })
      },
	searchKeyword () {
      axios({
		method:'post',
		url:'http://47.100.27.31:5000/api/search/',
		data:{
			'catagories': this.keyWord,
			'keywords': this.keyWord
		}
		})
		.then((response) => {
			// alert("hello")
			// alert(response)
			// console.log(response.data[0]['url'])
			// console.log(response)
			// this.data_list = response.data
			// this.test_data1 = response.data[0]['url']
			var tmp = response.data
			var data_list = [];
			// console.log("---before data list")
			// alert(this.config.data)
			for(var i = 0; i < response.data.length; i++) {
				// alert(tmp[i]['topic'])
				data_list.push([tmp[i]['topic'], tmp[i]['summary'], tmp[i]['url']]);
				// data_list[i][0] = tmp[i]['topic']
				// data_list[i][1] = tmp[i]['summary']
				// data_list[i][2] = tmp[i]['url']

				// this.config.data[i][0] = tmp[i]['topic']
				// this.config.data[i][1] = tmp[i]['summary']
				// this.config.data[i][2] = tmp[i]['url']
				// alert(data_list)
			}
			// tmp_data = this.config.data
			// tmp_data.data = data_list
			this.config = {
				data: data_list,
				header: ['标题', '摘要', '链接'],
				rowNum: 7, //表格行数
				headerHeight: 60,
				headerBGC: "#0f1325", //表头
				oddRowBGC: "#'#003B51'", //奇数行
				evenRowBGC: "#0A2732", //偶数行
				indexHeader:'序号',
				index: true,
				columnWidth: [50],
				align: ["center"],
				carousel: 'page'	
			}
				// console.log("---end data list")
			// console.log(data_list)
			// this.config.data = data_list

			this.showHeader = true
			axios({
				method: 'get',
				url: 'http://47.100.27.31:5000/api/set_craw_start/'
			})
			.then((response) => {
				// this.data_list = response.data
				console.log(response)
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
		},
		// 表头样式设置
            headClass () {
                return 'text-align: center;background:rgb(242,242,242);color:rgb(140,138,140)'
            },
            // 表格样式设置
            rowClass () {
                return 'text-align: center;'
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
