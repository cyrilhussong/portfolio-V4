<script>

</script>




<template>
    <header class="header">
        <nav class="nav-header">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projet">Projet</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <router-link to="/propos">À Propos</router-link>
        </nav>
  <nav class="titre-header">
    <h1><RouterLink to="/">Cyril Hussong</RouterLink></h1>
  </nav>
      
      
    
    
   

    </header>
    
</template>



<style scoped>



.titre-header a  {
    text-decoration: none; 
    color: hwb(189 4% 4%);
}
.titre-header :hover{
  color: rgb(168, 42, 116);
  box-shadow: 0 -20px 30px;
}

.header {
  background-color: black;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;        /* Active Flexbox */
  align-items: center;  /* Centre verticalement */
 
  font-size: 50px;
padding: 0;
margin: 0;
}
.nav-header{
  position: absolute;
    font-size: 50px;
  left: 12.5%;
  display: flex;
  gap: 20px; 
  
}
.nav-header  :hover{
  color: rgb(168, 42, 116);
  box-shadow: 0 -20px 30px;
}


   .titre-header {
    position: absolute;
    display: flex;
    right: 12.5%;
    margin: 0px;
   
    
   }


   

   .nav-header a { 
  color: hwb(189 4% 4%); 
  text-decoration: none; 
}

</style>