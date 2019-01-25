<template>
  <div>
    <nav class="navbar navbar-light bg-light justify-content-between myNavbar">
      <a class="navbar-brand">博客总览</a>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="输入关键字" aria-label="Search" v-model="search">
      </form>
    </nav>
    <div class="blogsList">
      <div class="card" v-for="blog in filterBlogs" :key="blog.id">
        <div class="card-header" v-rainbow>{{blog.title | intercept80}}</div>
        <div class="card-body">
          <div class="card-text">{{blog.abstract | intercept200}}</div>
          <router-link :to="'/blog/' + blog.id" class="btn btn-primary">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
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
      console.log(this.blogs)
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
      return this.blogs.filter( (blog) => {
        return blog.title.match(this.search)
      })
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        return el.style.color = "#" + Math.random().toString(16).slice(3,9);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myNavbar{
  margin: 30px 0;
}
.blogsList{
  text-align: left;
}
.card{
  margin: 10px 0;
}
.card-text{
  margin-bottom: 10px;
}
</style>
