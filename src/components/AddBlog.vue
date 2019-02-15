<template>
    <div class="addBlog container">
        <h1 class="addBlogTitle">添加博客</h1>
        <!-- <div class="yes container" v-show="flag">博客发布成功！</div> -->
		<div class="modal-content" v-show="flag">
		  <div class="modal-header">
			<h5 class="modal-title">温馨提示</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			  <span aria-hidden="true">&times;</span>
			</button>
		  </div>
		  <div class="modal-body">
			<p>恭喜小主，博客发布成功！</p>
		  </div>
		  <div class="modal-footer">
			<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
			<button type="button" class="btn btn-primary" @click="commitSure">确定</button>
		  </div>
		</div>
        <form v-show="!flag" id="myForm">
            <div class="form-group">
                <label for="exampleFormControlInput1">主题</label>
                <input type="text" class="form-control" placeholder="请输入主题" v-model="blogs.title">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">摘要</label>
                <input type="text" class="form-control" placeholder="请输入摘要" v-model="blogs.abstract">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">内容</label>
                <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="blogs.content"></textarea> -->
                <vue-editor v-model="blogs.content"></vue-editor>
            </div>
            <div class="form-group">
                 <label>分类</label>
                 <div class="form-control">                                         
					<div class="form-check form-check-inline" v-for="articleCategory in articleCategories" :key="articleCategory.cid">
                        <input class="form-check-input" type="checkbox" :id="articleCategory.cid" :value="articleCategory.text" v-model="blogs.categories">
                        <label class="form-check-label" :for="'#' + articleCategory.cid">{{articleCategory.text}}</label>
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
                author:"",
				fulltime:new Date().getTime(),
				time:new Date().getFullYear() +"-" + ((new Date().getMonth() +1)<10?('0'+(new Date().getMonth() +1)):(new Date().getMonth() +1)) +"-"+ new Date().getDate()
            },
            authors:["章苏萍","匿名网友"],
            flag:false,
			// articleCategories:["普通","前端","旅行日记"]
			articleCategories:[
				{cid:"category11",text:"普通"},
				{cid:"category12",text:"前端"},
				{cid:"category13",text:"旅行日记"},
			]
        }
    },
    methods:{
        postCon(){
			// let articleTitle = document.getElementById()
			if(this.blogs.title =="" || this.abstract == "" || this.content ==""){
				alert("小主，您还有信息未填写！暂时不能离开哦");
			}else{
				 this.$http.post('https://wd9926596323judpfb.wilddogio.com/posts.json',this.blogs).then( (data) => {
					// console.log(data)
					this.flag = !this.flag;
					
				})
		     } 
		},
		commitSure(){
			// this.flag = !this.flag;
			this.$router.push('/')
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
    text-align: center;
    line-height: 80px;
	color: #333;
	font-weight: normal;
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
