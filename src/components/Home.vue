<template>
    <div id="home-page">
        <h1>Latest Blogs</h1>
        <div v-for="blog in blogs" :key="blog.id" class="single-blog" @click="viewBlog(blog)">
            <h2>{{blog.title}}</h2>
            <article>{{ blog.body }}</article>
        </div>
        <router-link @click.native="scrollToTop" to="/showblogs">...See More</router-link>
    </div>
</template>
<script>
export default {
    date(){
        return{

        }
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        },
        viewBlog(blog) {
                this.$store.commit("viewBlog",blog);
                this.$router.push(`/blog/${blog.id}`);
            }

    },
    computed:{
        blogs(){
            return this.$store.state.blogs.slice(0,5)
        },
    },
    mounted(){
        console.log(this.$store.state.blogs)
    }
}
</script>
<style scoped>
#home-page{
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
    color:white;
    background-color: black;
    cursor:pointer;
    padding-bottom: 60px;
}
</style>