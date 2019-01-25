<template>
    <div class="addBlog container">
        <h1 class="addBlogTitle">添加博客</h1>
        <div class="yes container" v-show="flag">博客发布成功！</div>
        <form v-show="!flag">
            <div class="form-group">
                <label for="exampleFormControlInput1">主题</label>
                <input type="text" class="form-control" placeholder="主题" v-model="blogs.title">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">摘要</label>
                <input type="text" class="form-control" placeholder="摘要" v-model="blogs.abstract">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">内容</label>
                <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="blogs.content"></textarea> -->
                <vue-editor v-model="blogs.content"></vue-editor>
            </div>
            <div class="form-group">
                 <label>分类</label>
                 <div class="form-control">
                     <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="vue.js" v-model="blogs.categories">
                        <label class="form-check-label" for="inlineCheckbox1">vue.js</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="angular4" v-model="blogs.categories">
                        <label class="form-check-label" for="inlineCheckbox2">angular4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="node.js" v-model="blogs.categories">
                        <label class="form-check-label" for="inlineCheckbox3">node.js</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="react.js" v-model="blogs.categories">
                        <label class="form-check-label" for="inlineCheckbox2">react.js</label>
                    </div>
                 </div>
            </div>
            <div class="form-group">
                <label>作者</label>
                <select class="form-control" v-model="blogs.author">
                    <option v-for="author in authors" :key="author">{{author}}</option>
                </select>
            </div>    
            <button type="button" class="btn btn-primary btn-lg btn-block addBlogBtn" @click.prevent="postCon">添加博客</button> 
        </form>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
    data(){
        return{
            blogs:{
                title:"",
                abstract:"",
                content:"",
                categories:[],
                author:""
            },
            authors:["章苏萍","胡海洋","毛爷爷"],
            flag:false
        }
    },
    methods:{
        postCon(){
            this.$http.post('https://wd9926596323judpfb.wilddogio.com/posts.json',this.blogs).then( (data) => {
                // console.log(data)
                this.flag = !this.flag;
            })
        }
    },
    components:{
        VueEditor
    }
}
</script>

<style scoped>
.addBlogTitle{
    font-size: 30px;
    text-align: left;
    line-height: 100px;
}
.form-group{
    text-align: left;
}
.addBlogBtn{
    margin: 50px 0;
}
.yes{
    line-height: 100px;
    text-align: center;
}
</style>
