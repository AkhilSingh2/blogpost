<template>
    <div id="add-blog">
        <h2 v-if="!id">Add a New Blog Post</h2>
        <h2 v-else>Edit Your Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <!-- <input v-if="!id" type="text" v-model.lazy="blog.title" required />
            <input v-else type="text" :value="blogForEdit.title" @input="editBlog.title = $event.target.value" required /> -->
            <input type="text" :value="blog.title" @input="blog.title = $event.target.value" required />


            <label>Blog Content:</label>
            <!-- <textarea v-if="!id" v-model.lazy="blog.content"></textarea>
            <textarea v-else :value="blogForEdit.body" @input="blog.content = $event.target.value"></textarea> -->
            <textarea :value="blog.content" @input="blog.content = $event.target.value"></textarea>
            <button v-if="!id" @click.prevent="post">Add Blog</button>
            <button v-else @click.prevent="update">Update</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
            <router-link to='/showblogs'>See Blogs...</router-link>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title}}</p>
            <p>Blog content: </p>
            <p>{{ blog.content}}</p>
        </div>
    </div>
</template>
<script>


export default ({
    data() {
        return{
            blog:{
                title: this.$store.getters.blogForEdit.title,
                content: this.$store.getters.blogForEdit.body,
            },
            submitted:false,
            id: this.$route.params.id,
        }
        
    },
    methods:{
        post(){
            this.$store.commit("addBlog",{
                title: this.blog.title,
                body: this.blog.content,
                userId:1
            })
                this.submitted = true;
        },
        update(){
            this.$store.commit("updateBlog",{
                id:this.id,
                title: this.blog.title,
                body: this.blog.content,
            })
            this.submitted = true;
        }
    },
    mounted(){
        if(!this.id){
            this.$store.commit("deleteEditBlog")
        }
    }

})
</script>
<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>
