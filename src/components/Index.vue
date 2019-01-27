<template>
  <div class="">
	<!-- 轮播 -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/banner1.jpg" alt="First slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
		
    <nav class="navbar navbar-expand-lg navbar-light bg-light myNavbar">
      <!-- <a class="navbar-brand">文章总览</a> -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto indexUl">
					<li class="nav-item">
						<router-link class="nav-link" to="/">博客总览</router-link>
					</li>
					<!-- <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">前端</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#">JavaScript</a>
							<a class="dropdown-item" href="#">Webpack</a>
							<a class="dropdown-item" href="#">vue</a>
							<a class="dropdown-item" href="#">正则</a>
							<a class="dropdown-item" href="#">异步</a>
						</div>
					</li> -->
					<li class="nav-item">
						<router-link class="nav-link" to="/frontend">前端</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/projects">项目集</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/travel">旅行日记</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/time">时间轴</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/spare">打赏</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/words">留言版</router-link>
					</li>
				</ul>
				<!-- <form class="form-inline">
				  <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" v-model="search">
				</form> -->
			</div>
    </nav>
		
		<div>
			<router-view></router-view>
		</div>

  </div>
</template>

<script scoped>
export default {
  name: 'home',
	data () {
		return {
		  search:""
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel{
  padding: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.myNavbar{
  margin: 20px 0;
}
.myNavbar .indexUl li a{
	font-size: 18px;
	padding: 0 14px;
}
.myNavbar .indexUl li a.router-link-exact-active.router-link-active{
	color: #7d6865;
}
.myNavbar .indexUl li .dropdown-item{
	color: #666;
	font-size: 14px;
	padding-top: 8px;
	padding-bottom: 8px;
}
/* .myNavbar .navbar-brand{font-size: 30px;} */

 

/* .blogsList{
  text-align: left;
}
.card{
  margin: 14px 0;
}
.card .card-header{font-size: 20px;color: #403f3f;}
.card-text{
  margin-bottom: 10px;
} */
</style>
