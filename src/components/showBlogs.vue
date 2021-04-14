<template>
<div>
    <div class="pagination-bar bar1">
        <div class="pagination">
            <a @click.prevent="page--">&laquo;</a>
            <a :class="{'active': page==pageNumber }" v-for="pageNumber in pages" :key="pageNumber" @click="page = pageNumber">{{pageNumber}}</a>
            <a @click.prevent="page++">&raquo;</a>
        </div>
    </div>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in displayedBlogs" :key="blog.id" class="single-blog" @click="viewBlog(blog)">
            <h2>{{blog.title}}</h2>
            <article>{{ blog.body }}</article>
        </div>
    </div>
    <div class="pagination-bar">
        <div class="pagination">
            <a  @click.prevent="page--">&laquo;</a>
            <a  :class="{'active': page==pageNumber }" v-for="pageNumber in pages" :key="pageNumber" @click="page = pageNumber">{{pageNumber}}</a>
            <a  @click.prevent="page++">&raquo;</a>
        </div>
    </div>
         

</div>
 
</template>
<script>

export default {
    components:{
        
    },
    data() {
        return{
            page: 1,
            perPage: 5,
            pages: [],
            numberOfPages: 7,
        }
        
    },
    methods:{
           setPages () {
                let numberOfPages = this.numberOfPages;
                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate (blogs) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return  blogs.slice(from, to);
            },
            viewBlog(blog) {
                this.$store.commit("viewBlog",blog);
                this.$router.push(`/blog/${blog.id}`);
            }
    },

    // computed: mapState([
    //     'blogs',
        
    // ]),
    computed: {
        blogs(){
            return this.$store.getters.blogs
            // return localStorage.getItem("blogs")
        },
    displayedBlogs () {
      return this.paginate(this.blogs);
    }
  },
    mounted(){
    //     this.$store.dispatch('loadBlogs');
    this.setPages();
    },
    // watch: {
    //     blogs () {
    //         this.setPages();
    //     }
    // },
}
</script>
<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
.single-blog:hover{
    color: white;
    background-color: black;
    cursor: pointer;
}
.pagination-bar{
    max-width: 800px;
    min-height: 50px;
    margin: 0 auto;
    position: relative;
}
.bar1{
    min-height: 0;
}
.pagination {
    position:absolute;
  display: inline-block;
 left: 250px;
  
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}

/* .pagination-bar{
    max-width: 800px;
    min-height: 50px;
    margin: 0 auto;
}
ul.pagination{
	display: flex;
    flex-direction: row;
	justify-content: center;
	list-style-type:none;
	text-align: center;
	min-height: 50px;
}
.page-item {
	min-width: 50px;
    display: inline-block;
	
}

button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}



.collapse{
	float: right;
} */
</style>