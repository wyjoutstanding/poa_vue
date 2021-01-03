<template>
<div>
  <div id="main" style="width:300px ;height:200px;display: table-cell;"></div>
</div>
</template>

<script>
import axios from 'axios'
  import echarts from 'echarts'
  export default {
    name: 'index',
    data() {
      return {}
    },
    mounted: function() {
      this.$nextTick(function() {
        this.getPie()
      })
    },
    methods: {
      getPie() {
        // 绘制图表
        var myChart = echarts.init(document.getElementById('main'))
        // 指定图表的配置项和数据
        var option = {
          //标题
          title: {
           text: '情感分析',
            x: 'left' ,              //标题位置
             textStyle: { //标题内容的样式
               color: '#c9e0ef',
            //   fontStyle: 'normal',
            //   fontWeight: 100,
              fontSize: 10 //主题文字字体大小，默认为18px
             },
          },
          // stillShowZeroSum: true,
          //鼠标划过时饼状图上显示的数据
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          //图例
          legend: {//图例  标注各种颜色代表的模块
            // orient: 'vertical',//图例的显示方式  默认横向显示
            bottom: 10,//控制图例出现的距离  默认左上角
            left: 'center',//控制图例的位置
            // itemWidth: 16,//图例颜色块的宽度和高度
            // itemHeight: 12,
            textStyle: {//图例中文字的样式
              color: '#c9e0ef',
              fontSize: 8
            },
            data: ['中立', '积极', '消极']//图例上显示的饼图各模块上的名字
          },
          //饼图中各模块的颜色
          color: ['#32dadd', '#b6a2de', '#5ab1ef'],
          // 饼图数据
          series: {
            // name: 'bug分布',
            type: 'pie',             //echarts图的类型   pie代表饼图
            radius: '70%',           //饼图中饼状部分的大小所占整个父元素的百分比
            center: ['50%', '50%'],  //整个饼图在整个父元素中的位置
            // data:''               //饼图数据
            data: [                  //每个模块的名字和值
              { name: '中立', value: 1 },
              { name: '积极', value: 30},
              { name: '消极', value: 50 }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
                  // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
                },
                labelLine: {
                  show: true//官网demo里外部标注上的小细线的显示隐藏    默认显示
                }
              }
            },
			
          }

        }
		axios.get('http://47.100.27.31:5000/api/get_sentiment/').then(response => {
		  
		  var x=response.data["中立"];
		  option.series.data[0].value=x;
		  x=response.data["积极"];
		  option.series.data[1].value=x;
		  x=response.data["消极"];
		  option.series.data[2].value=x;
		  console.log(x);
		  console.log("help!");
		  console.log(x);
		  console.log(option.series.data);
		  myChart.setOption(option)
		}, response => {
		    console.log("error");
		});
        // 使用刚指定的配置项和数据显示图表。
        
      },
	 
	                 
	             
    }

  }

</script>

<style scoped>

</style>
