<template>
  <header class="header">
    <div class="logo">
      <!-- Ajouter un click handler pour rediriger vers le haut -->
      <router-link to="" @click.native="scrollToTop">
        <img class="topscroll" src="/top.jpeg" alt="">
      </router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <!-- <li><router-link to="/projet">Projet</router-link></li> -->
        <li><router-link to="/propos">À propos</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><a href="https://github.com/cyrilhussong/" target="_blank" class="btn">GitHub</a></li>
        <li><a href="https://linkedin.com/cyrilhussong/" target="_blank" class="btn">linkedin</a></li>
      </ul>
    </nav>
    <p>modification 2025/02/19</p>
    <div class="cta">
      <router-link :to="{ path: '/projet' }" class="btn" target="_blank">📄 Mon CV</router-link>




    </div>
  </header>
</template>

<script>
export default {
  methods: {
    // Méthode pour faire défiler la page jusqu'en haut
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
p{
 display: flex;
position: absolute;
 right: 15%;
 font-size: 18px;
 font-weight: bold;
}
.topscroll{
  width: 100px;
  border-radius: 50%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: #1a1a1a;
  color: white;
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

nav a:hover {
  color: #f39c12;
  
}

.btn {
  background-color: #f39c12;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.btn:hover {
  background-color: #e67e22;
}
</style>
