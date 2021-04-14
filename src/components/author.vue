<template>
    <div class="container1">
        <!-- <div class="about-section">
            <h1>About Me Page</h1>
            
            <p>Vue Js traning task 5.</p>
        </div> -->

        <h2 style="text-align:center">Author</h2>

        <div class="card">
            <img src="~@/assets/akhil.jpeg" alt="Akhil" style="width:10%">
            <div class="container2">
                <h2>Akhil Singh</h2>
                <p class="title">Developer & Author</p>
                <p>Trainee at Unthinkable Solutions</p>
                <p>akhisingh2211@gmail.com</p>
                <p><button class="button">Contact</button></p>
            </div>
        </div>



    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 25px;
}

.container2 {
  padding: 0 50px;
  margin-left: 20px;
}

.container2::after{
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 40%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
img{
    border-radius: 50%;
    float: left;
    margin-top: 15px;
    margin-left: 400px;
    margin-right: 50px;
    /* display: block;
  margin-left: auto;
  margin-right: auto; */
}
</style>
