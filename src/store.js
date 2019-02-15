import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        blogs:[]
    },
    mutations:{
        getData(state){
            axios.get('https://wd9926596323judpfb.wilddogio.com/posts.json').then( (data) => {
                return data.data
                }).then((data) => {     
                    var arrayData = [];
                    for ( var key in data){
                    data[key].id = key;
                    arrayData.push(data[key])
                    }
                    state.blogs = arrayData;
                })
        }
    }
})