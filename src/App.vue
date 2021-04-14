<template>
  <div id="app">
    <nav-bar />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import Navbar from './components/Navbar.vue'
import contactUs from './components/contactUs.vue'
import author from './components/author.vue'
import Home from './components/Home.vue'
import footer from './components/footer.vue'
export default {
  name: 'App',
  components:{
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'nav-bar': Navbar,
    'contact-form': contactUs,
    'author': author,
    'home': Home,
    'app-footer': footer
  },
    mounted() {
    // localStorage.clear();
    
    if (localStorage.getItem("blogs")) {
      const data = JSON.parse(localStorage.getItem("blogs"));
      console.log("list from storage - ", data);
      this.$store.commit("populateBlogsFromStorage", data);
      console.log("Populated")
    }
    else{
      this.$store.dispatch('loadBlogs');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
