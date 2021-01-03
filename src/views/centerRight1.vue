/* eslint-disable */
<template>
  <div id="centreRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">热搜排行榜</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
		
        <dv-scroll-board :config="config" style="width:17rem;height:4.28rem" />
      </div>
    </div>
  </div>
</template>

<script>
	/* eslint-disable */
	// import $ from  'jquery';
	import axios from 'axios';
	var analist=[];
//axios.get('/src/test/test_link.json').then()
// url: '/src/test/test_link.json',
	
export default {
  data() {
    return {
		info:{},
      config: {
        header: ["标题", "实时热度"],
		data:analist
		 // ["元旦当天,长官杂技小镇乐翻天!","<span class=colorGrass>98</span>"],
		  
		  // ["元旦宅家游戏推荐02-月圆之夜","<span class=colorGrass>98</span>"],
		  // ["元旦当天,长官杂技小镇乐翻天!","<span class=colorRed>98</span>"],
		  // ["元旦坚守 平安相伴","<span class=colorGrass>97</span>"],
		  // ["元旦进行时,安全记心间","<span class=colorRed>97</span>"],
		  // ["元旦庆贺新年为什么要扯“牛年”","<span class=colorGrass>96</span>"],
		  // ["「平安济阳」2021年元旦,我们这样过!","<span class=colorRed>94</span>"],
		  // ["冬日暖阳下的江南宋城,元旦小长假人从众,赣州旅游热门打卡地","<span class=colorGrass>91</span>"],
		  // ["TVB视后元旦发文意有所指,疑与拍拖6年的男友分手,当事人却否认","<span class=colorRed>91</span>"],
		  // ["元旦刚过,老师发的朋友圈就让家长“炸锅”,这是咋回事呢?","<span class=colorGrass>89</span>"],
		  // ["你的元旦出行,安徽公安交警来守护!","<span class=colorRed>88</span>"],
		  // ["「平安济阳」2021年元旦,我们这样过!","<span class=colorGrass>85</span>"],
		  // ["冬日暖阳下的江南宋城,元旦小长假人从众,赣州旅游热门打卡地","<span class=colorRed>85</span>"],
		  // ["TVB视后元旦发文意有所指,疑与拍拖6年的男友分手,当事人却否认","<span class=colorGrass>81</span>"],
		  // ["元旦刚过,老师发的朋友圈就让家长“炸锅”,这是咋回事呢?","<span class=colorRed>71</span>"],
		  // ["你的元旦出行,安徽公安交警来守护!","<span class=colorGrass>71</span>"],
		  // ["广汉三幼:多姿多彩庆元旦,喜气洋洋迎新年","<span class=colorRed>68</span>"],
		  // ["车丽华同志“四不两直”深入一线暗访督导2021年元旦交通安保工作...","<span class=colorGrass>66</span>"],
		  // ["元旦我在岗","<span class=colorRed>65</span>"],
		  // ["元旦我在岗|2021交警同行,很暖很安心","<span class=colorGrass>65</span>"],
		  // ["庆元旦迎新年 文艺汇演展风采","<span class=colorRed>65</span>"],
		  
		  
		,
        rowNum: 8, //表格行数
        headerHeight: 40,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
		indexHeader:'排名',
        index: true,
        columnWidth: [100],
        align: ["center"],
		carousel: 'single'
      }
    };
  },
  components: {},
  mounted(){
	  
	 // console.log(this.data);
	
	  this.getData();
	// axios
	// .get('http://localhost:8000/testjson.json')
	// .then(response => (this.info = response))
	
	
	// console.log("hello!zhuting")
  },
  methods: { 

	  getData(){
		 // console.log(analist[0])
		  axios.get('http://47.100.27.31:5000/api/get_ranking_list/').then(response => {
		      //console.log(response.data.title);
				var data_tmp=[];
				
			//	tmp.push(response.data.title[0]);
			for(var i=0;i<20;i++){
				//var tmp='["';
				var tmp=[];
				var text1='';
				//text1+=response.data.title[i];
				tmp[0]=response.data.title[i];
			 	//text1+='","';
				if(i%2==0){
				text1+='<span class=colorGrass>';}
				else
				text1+='<span class=colorRed>';
				 text1+=response.data.hot_value[i];
				 text1+='</span>';
				tmp[1]=text1;
				 data_tmp[i]=tmp;
				
		      }   
			 
			  analist=data_tmp;
			  console.log(analist);
		         // this.drawLine('main')
		  }, response => {
		      console.log("error");
		  });
	  }
  }
};

</script>
<style lang="scss">
#centreRight1 {
  padding: 0.2rem;
  height: 6.99rem;
  min-width: 5.00rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 6.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}
</style>