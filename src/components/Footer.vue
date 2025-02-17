<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">Cyril Dev</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/projet">Projet</router-link></li>
        <li><router-link to="/propos">À propos</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><a href="https://github.com/cyrilhussong/" target="_blank" class="btn">GitHub</a></li>
      </ul>
    </nav>
    <div class="cta">
      <!-- <router-link to="/projet" class="btn">📄 Mon CV</router-link> -->
      <a href="./Maquettes-Figma.pdf" class="btn" target="_blank">📄 Mon CV</a>
    </div>
  </header>
</template>

<style scoped>
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
