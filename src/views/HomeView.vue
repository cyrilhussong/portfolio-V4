<template>
  <main class="home">
    <div class="h1">
    <h1>Bienvenue <br> sur mon <br> Portfolio</h1>
  </div>
    <button @click="goToProjet">Découvrir</button>
  </main>
</template>

<script>
export default {
  name: "HomePage",  // Change selon le nom de ton composant
  methods: {
    goToProjet() {
      // Rediriger vers la page /projet
      this.$router.push('/projet');
    }
  }
}
</script>

<style scoped>
.h1{
  margin: 0;
  padding: 0;
  display:flex;
  text-align: center;
  justify-content:center;
  position: absolute;
  right: 10% ;
  top:35%;
  font-size: 50px ;
  color: rgb(173, 36, 214);
  font-style: italic;
}

.home {
  background-image: url('/img-home.jpeg');
  background-size: cover;
  background-position: center;
  
  height: 150vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

}


button {
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 250px;
  height: 50px;
}

button:hover {
  background-color: #971d68;
}
</style>
