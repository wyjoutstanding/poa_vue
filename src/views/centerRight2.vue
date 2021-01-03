<template>
  <div id="centreRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="align-left"></icon>
        </span>
        <span class="fs-xl text mx-2">微博流量分析</span>
      </div>
      <div class="d-flex jc-center body-box" style=" margin-top: 0;">
        <dv-capsule-chart :config="config" style="width: 100%;height:2rem" />
        <!-- ---------------------------------------- -->
        <centreRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centreRight2Chart1 from "@/components/echart/centerRight/centerRightChart";
import axios from 'axios'
var test=
[
          {
            name: "拉踩量",
            value: 167
          },
          {
            name: "评论量",
            value: 67
          },
          {
            name: "点赞数",
            value: 123
          },
		  {
		    name: "转发数",
		    value: 123
		  },
          
        ];
export default {
  data() {
    return {
      config: {
        data:[],
		// [
  //         {
  //           name: "拉踩量",
  //           value: 167
  //         },
  //         {
  //           name: "评论量",
  //           value: 67
  //         },
  //         {
  //           name: "点赞数",
  //           value: 123
  //         },
		//   {
		//     name: "转发数",
		//     value: 123
		//   },
          
  //       ]
      }
    };
  },
  components: { centreRight2Chart1 },
  mounted() {
	  this.getData();
  },
  methods: {
	 
	  getData() {//info
	                  axios.get('http://47.100.27.31:5000/api/get_weibo_data/').then(response => {
	  				this.config=test;
	  				var res_data=response.data;
					var pre_data = [
				{
				name: "拉踩量",
				value: 0
				},
				{
				name: "评论量",
				value: 0
				},
				{
				name: "点赞量",
				value: 0
				},
				{
				name: "转发量",
				value: 0
				}
				];
				pre_data[0].value=res_data["拉踩量"];
				pre_data[1].value=res_data["评论量"];
				pre_data[2].value=res_data["点赞量"];
				pre_data[3].value=res_data["转发量"];
				// pre_data.push({"name":"拉踩量","value":res_data['拉踩量']});
				// pre_data.push({"name":"评论量","value":res_data['评论量']});
				// pre_data.push({"name":"点赞量","value":res_data['点赞量']});
				// pre_data.push({"name":"转发量","value":res_data['转发量']});
				
				console.log('pre_data'+pre_data);
					this.config.data=pre_data;
					console.log('this.config.data'+this.config.data);
					//	res_data.push({"name":infor[i], "value":infor[i].value})
					
					//analist[0].value=res_data["转发量"];
					//analist[1].value=res_data["评论量"];
					//analist[2].value=res_data["点击量"];
					//this.data=analist;
	  			//this.data.config.data[0].value=res_data["转发量"];
				//console.log(this.data.config.data[0].value);
				//this.data.data[1].value=res_data["评论量"];
				//this.data.data[2].value=res_data["点击量"];
	  				console.log(res_data);
					console.log()
	  				
	             
	                  }, response => {
	                      console.log("error");
	                  });
	              },
	  
	  
  }
};
</script>

<style lang="scss">
#centreRight2 {
  padding: 0.0625rem;
  height: 5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    padding: 0.0625rem;
    height: 5.0625rem;
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