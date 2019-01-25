<template>
    <div class="singleBlog">
        <h1>{{blog.title}}</h1>
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

<style>

</style>
