<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import axios from 'axios';
export default {
  data () {
    return {
      cdata: {
        angleAxisData: [
          "积极",
          "消极",
          "中立",
        ],
        seriesData: [
          {
            value:70,
            itemStyle: {
              normal: {
                color: "#f54d4d"
              }
            }
          },
          
          
          {
            value:60,
            itemStyle: {
              normal: {
                color: "#01fff5"
              }
            }
          },
         
          {
            value:60,
            itemStyle: {
              normal: {
                color: "#c32eff"
              }
            }
          },
         
        ]
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
	  this.getData();
  },
  methods: {
	  getData() {//
	                  axios.get('http://47.100.27.31:5000/api/get_sentiment/').then(response => {
	                      var x=response.data["中立"];
	  						console.log(x);
							this.cdata.seriesData[2].value=x*100;
						var y=response.data["积极"];
						this.cdata.seriesData[0].value=y*100;
						console.log(y);
						var z=response.data["消极"];
						this.cdata.seriesData[1].value=z*100;
						console.log(z);
	                  }, response => {
	                      console.log("error");
	                  });
	              },
  }
}
</script>

<style lang="scss" scoped>
</style>