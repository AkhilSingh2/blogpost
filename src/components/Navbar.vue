<template>

<div class="bg-img">
  <div class="container">
    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/showblogs">Blogs</router-link>
      <router-link to="/add">Submit</router-link>
      <router-link to="/contactus">Contact Us</router-link>
      <router-link to="/author">About Me</router-link>
    </div>
  </div>
</div>

</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
      sticky_nav(){
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
      }
    }
}
</script>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

.bg-img {
  /* The image used */
  /* background-image: url('~@/assets/nature-wallpapers-38.jpg'); */
background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('~@/assets/nature-wallpapers-38.jpg');
  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  /* Needed to position the navbar */
  position: relative;
  
}

/* Position the navbar container inside the image */
.container {
  /* position: absolute; */
  /* margin: 20px auto; */
  width: 50%;
  /* bottom: 0px; */
  left: 356px;
  /* position: sticky; */
  top: 0px;
  position: sticky;
  
}

/* The navbar */
.topnav {
  overflow: hidden;
  background:transparent;
  display: flex;
  justify-content: space-around;
  
  
}

/* Navbar links */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 30px;
}

.topnav a:hover {
  background-color: green;
  
}
.router-link-exact-active{
  background-color: green;
}
</style>