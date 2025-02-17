<template>
    <div class="page-404">
      <div class="container">
        <h1>Oops! Page non trouvée</h1>
        <h2>Erreur 404</h2>
        <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <a href="./HomeView.vue" class="home-link">Retour à l'accueil</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Page404"
  };
  </script>
  
  <style scoped>
  .page-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #396fad; /* Couleur bleue qui s'harmonise avec ton site */
    color: white;
    font-family: "Raleway", sans-serif;
   
   
  }
  
  .container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1); /* Fond légèrement transparent pour un effet élégant */
    padding: 30px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #f4f4f4;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #ddd;
  }
  
  .home-link {
    text-decoration: none;
    color: #f4f4f4;
    font-size: 1.5rem;
    background-color: #396fad;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .home-link:hover {
    background-color: #4c82c6; /* Effet au survol */
  }
  </style>
  