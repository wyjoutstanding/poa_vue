<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import axios from 'axios'
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          // "市区",
          // "万州",
          // "江北",
         
        ],
        lineData: [
          // 18092,
          // 20728,
          // 24045,     
        ],
        barData: [
          // 4600,
          // 5000,
          // 5500,
        ],
        rateData: [],
		
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {  
    this.getData();
	
  },
  methods: {
	  getData() {
	                  axios.get('http://47.100.27.31:5000/api/get_website_hotspot').then(response => {
	                      //console.log(response.data);
						  //this.info=response;
	                         this.cdata.category=response.data.website;
							 this.cdata.barData=response.data.hot_value;
							 console.log("hello!");
							 //console.log(response.data.website[0]);
							 console.log(response.data);
							 //console.log(response.data.website);
	                         // this.drawLine('main')
	                  }, response => {
	                      console.log("error");
	                  });
	              },

    // 根据自己的业务情况修改
    // setData () {
    //   for (let i = 0; i < this.cdata.barData.length -1; i++) {
    //     let rate = this.cdata.barData[i] / this.cdata.lineData[i];
    //     this.cdata.rateData.push(rate.toFixed(2));
    //   }
   // },
  }
};
</script>

<style lang="scss" scoped>
</style>