<template>
  <div class="cloudword" >
    <div id="cloud" >
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="false"
      :wordClick="wordClickHandler">
      </wordcloud>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import wordcloud from 'vue-wordcloud'
var analist=[];
var test=[{
          "name": "元旦11",
          "value": 0.4
        },
        {
          "name": "杨幂",
          "value": 0.3
        },
        {
          "name": "things",
          "value": 0.1
        },
        {
          "name": "look",
          "value": 1.5
        },
        {
          "name": "two",
          "value": 0.9
        },
        {
          "name": "fun",
          "value": 1.9
        }
      ]
// function change(name,value){
// this.name = name;
// this.value = value;
// } 
export default {
  name: 'app',
  components: {
    wordcloud
  },
  mounted() {
  	this.getData();
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    },
	getData() {//info
	                axios.get('http://47.100.27.31:5000/api/get_word_cloud/').then(response => {
						//analist=response.data;
	                   //analist=response;
					 //  for(var i=0;i<response.data.length;i++)
			// 		 var tmp='{"name":"';
			// 		 tmp+=response.data[0].name;
			// 		 tmp+='",\n"value":';
			// tmp+=response.data[0].value;
			// tmp+='}';
			// analist[0]=tmp;
					//  analist[0]=new change(response.data[0].name,parseFloat(response.data[0].value));
					var infor=response.data;
					var res_data = []
					for(var i=0;i<infor.length;i++){
						res_data.push({"name":infor[i].name, "value":infor[i].value})
					}
					
					console.log(res_data);
					
	                    this.defaultWords = res_data;
	                }, response => {
	                    console.log("error");
	                });
	            },
  },
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: analist,
	  // [{
   //        "name": "元旦",
   //        "value": 0.4
   //      },
   //      {
   //        "name": "杨幂",
   //        "value": 0.3
   //      },
   //      {
   //        "name": "things",
   //        "value": 0.1
   //      },
   //      {
   //        "name": "look",
   //        "value": 1.5
   //      },
   //      {
   //        "name": "two",
   //        "value": 0.9
   //      },
   //      {
   //        "name": "fun",
   //        "value": 1.9
   //      }
   //    ]
    }
  }
}
</script>

