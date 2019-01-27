<template>
  <div id="app">
    <div class="page clearfix">
      <aside class="sidebar">
        <nav class="leftNav">
          <a href="" class="logo"><span>A portfolio of</span>OUR FUTURE</a>
          <ul>
            <li><router-link to="/">网站首页</router-link></li>
            <li><router-link to="/addblog">添加博客</router-link></li>
            <li><router-link to="/contact">联系博主</router-link></li>
          </ul>
          <div class="bg_bottom"></div>
        </nav>
				
			<div class="card musicCard" style="width: 248px;" >
				<div class="card-body">
					<h6 class="card-subtitle mb-2 text-muted"><span>最喜欢的音乐</span></h6>
					<div class="music">
						<audio controls class="myAudio">
							<source src="http://www.ytmp3.cn/down/56872.mp3" type="audio/mp3">
						</audio>
					</div>
				</div>
			</div>
				
			<div class="card tagCard" style="width: 248px;" >
				<div class="card-body">
					<h6 class="card-subtitle mb-2 text-muted"><span>标签集合</span></h6>
					<div class="tagUl">
						<ul>
							<li>对象</li>
							<li>阅读感悟</li>
							<li>面试</li>
							<li>原型</li>
							<li>使用工具</li>
							<li>ES6</li>
							<li>熊猫笔记</li>
							<li>VUE</li>
							<li>感悟</li>
						</ul>
					</div>
				</div>
			</div>
      </aside>

      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {background: url(assets/bg.gif) repeat-y center;color: #8f8f8f;}
input::-webkit-input-placeholder {color: #ccc!important; font-size: 13px;}
ul,li{margin: 0;padding: 0;}
.page{width: 1200px;margin: 0 auto;}
.sidebar{float: left;width: 248px;height: 100%; position: fixed;padding-top: 0;margin-left: -30px;}
nav.leftNav{ text-align: center; margin-bottom: 14px;}
nav.leftNav .logo{font-size: 33px;text-transform: uppercase;text-align: center;color: #a08784;text-decoration: none;
margin: 20px 0;display: block;font-weight: 200;color: #a08784;text-decoration: none;}
nav.leftNav .logo span {font-size: 10px;display: block;
background: url(assets/a_portfolio_bg.png) no-repeat center .3em;color: #c4bab7;font-weight: normal;}
nav.leftNav ul {font-size: 22px;padding-top: 30px;list-style: none;background: url(assets/nav_bg.png) no-repeat top center;
text-transform: uppercase;}
nav.leftNav ul li{position: relative;}
/* nav ul li a.active{background: url(assets/nav_active.png) no-repeat 26px .1em;} */
nav.leftNav ul li a{ color: #7d6865;padding: 10px 0 10px 0;display: block;}
nav.leftNav ul li a:hover{color: #7d6865;}
nav.leftNav .bg_bottom {background: url(assets/nav_bg.png) no-repeat bottom center;height: 30px;}

.main-content{float: right;width: 890px;padding: 20px 0;}

a,a:active,a:visited,a:hover{
  text-decoration: none!important;
}
.leftNav a.router-link-exact-active.router-link-active{
  color: #fff;
	background: url(assets/nav_active.png) no-repeat 26px .1em;
}

.musicCard{margin-bottom: 14px;}
.musicCard .card-subtitle span{
	padding: 0 10px 4px 0;
	border-bottom: 1px solid #ccc;
	color: #7d6865;
} 
.musicCard .music{padding-top: 14px;}
.myAudio{
	width: 240px;
	margin-left: -1.01rem;
}

.tagCard .card-subtitle span{
	padding: 0 10px 4px 0;
	border-bottom: 1px solid #ccc;
	color: #7d6865;
} 
.tagCard .tagUl ul{
	list-style: none;
	overflow: hidden;
}
.tagCard .tagUl ul li{
	font-size: 13px;
	float: left;
	padding:4px 8px;
	border: 1px solid #CCC;
	margin: 8px 8px 0 0;
	cursor: pointer;
	transition: all linear .3s;
}
.tagCard .tagUl ul li:hover{
	background: #7D6865;
	color: #fff;
	border: 1px solid #7D6865;
}
</style>
