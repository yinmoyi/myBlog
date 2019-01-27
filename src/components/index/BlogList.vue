<template>
	<!-- 所有文章列表 -->
	<div class="blogsList">
	  <div class="card" v-for="blog in filterBlogs" :key="blog.id">
	    <div class="card-header">{{blog.title | intercept80}}</div>
	    <div class="card-body">
	      <div class="card-text">{{blog.abstract | intercept200}}</div>
				<div class="date">{{blog.time}}</div>
	      <div><router-link :to="'/blog/' + blog.id" class="btn btn-outline-secondary btn-sm">查看详情</router-link></div>
	    </div>
	  </div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		  blogs:[],
		  search:""
		}
	},
  created(){
		this.$http.get('https://wd9926596323judpfb.wilddogio.com/posts.json').then( (data) => {
			return data.json()
			// this.blogs = data.body.slice(0,6)
		}).then((data) => {     
			var arrayData = [];
			for ( var key in data){
			// console.log(key)
			data[key].id = key;
			arrayData.push(data[key])
			}
			this.blogs = arrayData;
			// console.log(this.blogs)
		})
  },
  filters:{
		intercept80(value){
			if(!value) return '';
			return value.toString().slice(0,80) 
		},
		intercept200(value){
			if(!value) return '';
			return value.toString().slice(0,200) + '...'
		}
  },
  computed:{
		filterBlogs(){
// 			return this.blogs.filter( (blog) => {
// 				return blog.title.match(this.search)
// 			})		

				return sortKey(this.blogs.filter( (blog) => {
					return blog.title.match(this.search)
				}),'fulltime')
		}
  },
}

//排序
function sortKey(array,key){
	return array.sort(function(a,b){
		let x = a[key];
		let y = b[key];
		return ((x<y)?-1:(x>y)?1:0)
	}).reverse()
}

</script>

<style scoped="scoped">
.blogsList{
  text-align: left;
}
.blogsList .card{
  margin: 14px 0;
}
.blogsList .card .card-header{font-size: 20px;color: #403f3f;}
.blogsList .card-text{
  /* margin-bottom: 10px; */
}
.blogsList .card .date{
	font-size: 13px;
	height: 40px;
	line-height: 40px;
	color: #bfbfbf;
}
</style>
