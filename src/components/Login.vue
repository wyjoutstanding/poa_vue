
/* eslint-disable */
 <template> 
 <div id='login'>
	<div class="login">
	<br/><br /><br /><br /><br />
	<h2>舆情分析系统</h2>
	<div class="login-top">
	<h1>登陆</h1>
	<form>
		<input type="text" value="User Id" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'User Id';}">
		<input type="password" value="password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}">
	</form>
			<div class="forgot">
			<a href="#">忘记密码</a>
				
				<router-link :to="{name:'index'}">
		
					<button  type="submit" value="登陆"> 登陆</button>
				</router-link>
			</div>
			</div>
			<div class="login-bottom">
			<h3>新用户 &nbsp;<a href="#">注册</a></h3>
			</div>
			</div>	
 </div>
 
  </template>

  <script>
  </script> 

<style >
	@import url("../assets/css/stylelogin.css");
</style>
