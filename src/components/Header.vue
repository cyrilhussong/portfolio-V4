<script>

</script>

<template>
    <header class="header">
        <nav class="nav-header">
            <RouterLink to="/">Home</RouterLink>
            <!-- <RouterLink to="/projet">Projet</RouterLink> -->
            <RouterLink to="/contact">Contact</RouterLink>
            <router-link to="/propos">À Propos</router-link>
        </nav>
        <nav class="titre-header">
            <h1><RouterLink to="/">Cyril Hussong</RouterLink></h1>
        </nav>
    </header>
</template>

<style scoped>
.titre-header a {
    text-decoration: none; 
    color: hwb(189 4% 4%);
}
.titre-header :hover {
    color: rgb(168, 42, 116);
    box-shadow: 0 -20px 30px;
}




.header {
  background-color: black;
  text-align: center;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-header a {
  color: #00dfff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
}

.nav-header a:hover {
  text-decoration: underline;
}

.titre-header {
  margin-top: 20px;
}

.titre-header a {
  color: #00dfff;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
}

.titre-header a:hover {
  color: rgb(168, 42, 116);
}

/* Responsive (déjà bien fait, juste au cas où) */
@media (max-width: 768px) {
  .nav-header a {
    font-size: 20px;
  }

  .titre-header a {
    font-size: 26px;
  }
}


</style>
