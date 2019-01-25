<template>
  <div id="app">
    <div class="container">
      <header>
        <router-link to="/">首页</router-link>
        <router-link to="/addblog">添加博客</router-link>
      </header>   
      <div>
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
a,a:active,a:visited{
  text-decoration: none!important;
}
header{
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: bisque;
  font-size: 18px;
}
header a{
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 4px;
  margin: 0 8px;
  color: #888;
}
.router-link-exact-active.router-link-active{
  color: #333;
}
</style>
