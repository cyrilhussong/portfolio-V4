<script setup>
// Pas de script nécessaire ici pour l'instant
</script>

<template>
  <header class="header">
    <nav class="nav-header">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/propos">À Propos</RouterLink>
    </nav>
    <div class="titre-header">
      <h1><RouterLink to="/">Cyril Hussong</RouterLink></h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: black;
  border-bottom: 2px solid indigo;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  font-family: Georgia, serif;
}

.nav-header {
  display: flex;
  gap: 30px;
}

.nav-header a {
  color: #00e5ff;
  font-size: 24px;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.nav-header a:hover {
  color: #ff00e5;
}

.titre-header h1 {
  margin: 0;
}

.titre-header a {
  font-size: 28px;
  font-weight: bold;
  color: #00e5ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.titre-header a:hover {
  color: rgb(168, 42, 116);
}
</style>
