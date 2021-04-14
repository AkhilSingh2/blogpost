<template>
    <div id="single-blogs">
        <h1>Single Blog</h1>
        <div class="single-blog">
            <h2>{{title}}</h2>
            <article>{{body}}</article>
        </div>
        <button @click="editBlog">Edit Blog</button>
        <button @click="deleteBlog">Delete Blog</button>
        <button @click="goBack">Go Back</button>

    </div>
</template>


<script>
import buttons from '../../../todo1/src/components/buttons.vue'
export default {
  components: { buttons },
    data(){
        return {
            id: this.$store.state.singleBlog.id,
            title:this.$store.state.singleBlog.title,
            body: this.$store.state.singleBlog.body
        }
    },
    methods:{
        editBlog(){
            let id = this.id;
            this.$store.commit("getBlogForEdit",id);
            this.$router.push(`/add/${id}`);
        },
        deleteBlog(){
            this.$store.commit("deleteBlog",this.id)
            this.$router.push("/")
        },
        goBack(){
            this.$router.go(-1);
        }
    },
    computed:{
 
    }
    
}
</script>

<style scoped>
#single-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    min-height: 250px;
}
</style>