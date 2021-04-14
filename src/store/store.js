import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
	state() {
	    return {
            blogs:[],
            singleBlog:[],
            blogForEdit:{
                title:'',
                body: '',
            },
	    }
	},
  
	mutations: {
        SET_Blogs (state, blogs) {
            state.blogs = blogs.slice(0,35)
        },
        addBlog (state, payload) {
            const newBlog = {
                id: Date.now(),
                title: payload.title,
                body: payload.body,
            };
            state.blogs.unshift(newBlog);
            localStorage.setItem("blogs", JSON.stringify(state.blogs));
        },
        populateBlogsFromStorage(state, dataList) {
            state.blogs = dataList;
            console.log("Populating")
        },
        viewBlog(state,blog){
            state.singleBlog = blog;
            
        },
        getBlogForEdit(state,id){
            let obj = state.blogs.find(obj => obj.id == id);
            state.blogForEdit.title = obj.title;
            state.blogForEdit.body = obj.body
        },
        deleteEditBlog(state){
            state.blogForEdit = {}
        },
        updateBlog(state,payload){
            let obj = state.blogs.findIndex(obj => obj.id == payload.id);
            state.blogs[obj].title = payload.title;
            state.blogs[obj].body = payload.body;
            localStorage.setItem("blogs", JSON.stringify(state.blogs));
        },
        deleteBlog(state,id){
            let obj = state.blogs.findIndex(obj => obj.id == id);
            state.blogs.splice(obj, 1);
            // delete state.todos[obj];
            
            localStorage.setItem("blogs", JSON.stringify(state.blogs));
			
        }


	},
	getters: {
        blogs: state => {
            return state.blogs;
        },
        viewSingleBlog: state => {
            return state.singleBlog;
        },
        blogForEdit: state => {
            return state.blogForEdit
        }
	},
	actions: {
        loadBlogs ({ commit }) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.data.slice(0,45))
                .then(blogs => {
                    console.log(blogs);
                commit('SET_Blogs', blogs)
            })
        }
		
	}

  });
  export default store;