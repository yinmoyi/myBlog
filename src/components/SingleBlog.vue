<template>
    <div class="singleBlog">
        <h1 class="singleTitle">{{blog.title}}</h1>
		<div class="authorText"><span>发布时间:<i>{{blog.time}}</i></span><span>作者:<i>{{blog.author}}</i></span><span>分类:<i v-for="category in blog.categories">{{category}}</i></span></div>
        <article v-html="blog.content"></article>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://wd9926596323judpfb.wilddogio.com/posts/' + this.id +'.json').then( (data) => {
            // this.blog = data.body;
            // console.log(data)
            return data.json()
        }).then( (data) => {
            this.blog = data;
        })
    }
}
</script>

<style scoped="scoped">
.singleTitle{font-size: 36px; font-weight: normal;color: #333;text-align: center;}
.authorText{ text-align: center; font-size: 13px; color: #999; line-height: 40px;}
.authorText span{ padding: 0 8px;}
.authorText i{ font-style: normal;padding-left: 4px;}
article{padding: 30px 0;}
</style>
