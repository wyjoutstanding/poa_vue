<template>
	<div class="d-flex jc-center body-box">
			
	  <dv-scroll-board :config="config" style="width:1000px;height:220px"  />
	</div>
</template>

<script>
	export default {
		props: {
			test_data : String
		},
	  data() {
	    return {
			info:{},
	      config: {
	        header: ["标题", "实时热度","xxx"],
			data:[
    ['行1列1', '行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3行1列2行1列2行1列2行1列2行1列2行1列2'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3']
  ],
			
	        rowNum: 10, //表格行数
	        headerHeight: 40,
	        headerBGC: "#0f1325", //表头
	        oddRowBGC: "#'#003B51'", //奇数行
	        evenRowBGC: "#0A2732", //偶数行
			indexHeader:'aaa',
	        index: true,
	        columnWidth: [100],
	        align: ["center"],
			carousel: 'single'
	      }
	    };
	  },
	  components: {},
	  mounted(){
		// this.set_data_list
		
		  //this.getData();
		
	  },
	  methods: { 
		//   set_data_list() {
		// 	this.
		//   }
		
	  }
	};
</script>

<style>
</style>
