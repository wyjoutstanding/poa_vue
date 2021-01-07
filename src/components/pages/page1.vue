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
							<!-- 搜索框 -->
							<input name="wd" id="search" type="text"
							v-model="keyWord"

								style="margin:0px;
								width: 400px;
								border-radius:9px;
								background-color:transparent;
								height: 40px;
								    color: #72e3ff;
								    border: #00c0ef 2px solid;
								    text-indent:0.6em;
									font-size: 16px;
								    border-radius: 5px;
								"  
								value="请输入关键词">
							<!-- 间隔 -->
							<input type="text" 
								disabled="disabled"
								style="
								background-color: transparent;
								width:10px">
							<!-- 按钮 -->
							<button
								type="button"
								left:100px 
								style="margin:0px;
									border-radius:5px;
									height: 30px;
									
									opacity:0.8;
									background-color: #00c0ef;
									    color: white;
									    border: #00cdff 2px solid;
									    width: 80px;
									    border-radius: 5px;
									"
								@click="searchKeyword()"
							>立即搜索</button>
						</div>
					</form>
				</div>
			</div>
			<div>
				<br><br>
				<!-- 间隔 -->
				<input type="text"
					disabled="disabled"
					style="
					background-color: transparent;
					width:200px">
				<!-- 开始时间 -->
				<font style="color: #72e3ff;
					background-color: transparent;
					font-size: 16px;
				">
					起始时间：
				</font>
				<input type="datetime-local" style="
					background-color: transparent;
					color: #FFFFFF;
					">
				<!-- 间隔 -->
				<input type="text"
					disabled="disabled"
					style="
					background-color: transparent;
					width:130px">
				<!-- 阈值 -->
				<input type="text"
					disabled="disabled"
					style="
					color: #72e3ff;
					background-color: transparent;
					font-size: 16px;
					width:70px"
					value="阈值:">
				<input type="number" min='0' max='100' 
					style="
						background-color:transparent;
						color:#FFFFFF;
						">
				<!-- 间隔 -->
				<input type="text"
					disabled="disabled"
					style="
					background-color: transparent;
					width:130px">
				<!-- 结束时间 -->
				<font style="font-size: 16px;
					color: #72e3ff;
				">
					结束时间：
				</font>
				<input type="datetime-local" style="
					background-color:transparent;
					color: #FFFFFF;
					">
			</div>
			<!-- 新的一行 -->
			<div>
				<!-- 间隔 -->
				<input type="text"
					disabled="disabled"
					style="
					background-color: transparent;
					width:200px">
					
				<!-- 信息类别 -->
				<!-- <div style="width:100%;text-align:center"> -->
					<input type="text"
						disabled="disabled"
						style="
						color: #72e3ff;
						font-size: 16px;
						background-color: transparent;
						width:70px"
						value="信息类别:">
					<font style="
						color: #72e3ff;
						font-size: 16px;
						background-color: transparent;
						width:70px">
						<input type="checkbox" value="新闻">新闻
						<!-- 间隔 -->
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="财经">财经
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="军事">军事
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="娱乐">娱乐
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="政治">政治
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="八卦">八卦
						</font>
				<!-- </div> -->
				
				<!-- 间隔 -->
				<input type="text"
					disabled="disabled"
					style="
					background-color: transparent;
					width:100px">
				
				<!-- 新闻来源 -->
				<!-- <div style="width:100%;text-align:center"> -->
					<input type="text"
						disabled="disabled"
						style="
						color: #72e3ff;
						font-size: 16px;
						background-color: transparent;
						width:70px"
						value="新闻来源:">
					<font style="
						color: #72e3ff;
						font-size: 16px;
						background-color: transparent;
						width:70px">
						<input type="checkbox" value="百度">百度
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="微博">微博
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="知乎">知乎
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="人民网">人民网
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="凤凰网">凤凰网
						<input type="text"
							disabled="disabled"
							style="
							background-color: transparent;
							width:5px">
						<input type="checkbox" value="腾讯网">腾讯网
						</font>
			</div>
		</div>
			
			<p><br><br></p>
			
			<div class="table-wrapper" 
			ref="tableWrapper" 
				v-loading="loading" 
				style="width:100%;
					text-align:center">
			</div>
			
		<div class="d-flex jc-center body-box">
			
	  		<dv-scroll-board :config="config" style="width:85%;height:350px"  />
		</div>
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
	        // header: ['标题', '摘要', '链接'],
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
