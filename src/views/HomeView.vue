<template>
  <main class="home">
    <div class="h1">
      <h1>Bienvenue sur mon Portfolio</h1>
    </div>

    <div class="paragraphe">
      <p>Bonjour ! Je suis Cyril Hussong, un développeur web junior passionné par la création d’expériences interactives et modernes. 
        Après une carrière dans la boucherie, j'ai décidé de me reconvertir dans le développement web. 
        J'aime apprendre, résoudre des problèmes et concevoir des interfaces élégantes et fonctionnelles.</p>
    </div>
    
    <!-- Conteneur pour les images -->
    <div class="projets">
      <div class="projet"> 
        <router-link to="/projet">
          <img src="/logo-cv.jpeg" alt="projet-img">
          <p>CV</p>
        </router-link>
      </div>
      <div class="projet">
        <a href="/maquette.pdf">
          <img src="/logo-figma.png" alt="projet-img">
          <p>Maquette</p>
        </a>
      </div>
    </div>
    
    <button @click="goToProjet">Découvrir</button>
    <hr >
    <!-- Formulaire de contact entre le bouton et le footer -->
    <div class="contact">
      <div class="contact-container">
        <h1>Contactez-Moi</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="nom">Nom:👤</label>
            <input type="text" v-model="nom" id="nom" required />
          </div>
          
          <div class="form-group">
            <label for="email">Email: 📧</label>
            <input type="email" v-model="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message:💬 </label>
            <textarea v-model="message" id="message" rows="4" required></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>

        <!-- Message de succès -->
        <div v-if="formSubmitted" class="success-message">
          <p>Merci, {{ nom }} ! Votre message a été envoyé.</p>
        </div>

        <!-- Message d'erreur -->
        <div v-if="formError" class="error-message">
          <p style="color: red;">Veuillez remplir tous les champs.</p>
        </div>
      </div>
    </div>

   
  </main>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      nom: '',
      email: '',
      message: '',
      formSubmitted: false,
      formError: false
    };
  },
  methods: {
    goToProjet() {
      this.$router.push('/projet');
    },
    handleSubmit() {
      if (this.nom && this.email && this.message) {
        this.formSubmitted = true;
        this.formError = false;
        console.log('Message envoyé:', {
          nom: this.nom,
          email: this.email,
          message: this.message
        });

        // Réinitialiser les champs après l'envoi
        this.nom = '';
        this.email = '';
        this.message = '';
      } else {
        this.formSubmitted = false;
        this.formError = true;
      }
    }
  }
};
</script>

<style scoped>
hr{
  display: flex;
  height: 0.5px;
  width: 80%;
  background-color: white;
  margin-top: 50px;
  
}
.paragraphe {
  font-size: 3rem;
  font-style: italic;
  color: rgb(12, 241, 241);
  text-align: center;
  margin-bottom: 30px;
}

.h1 {
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 50px;
  color: rgb(173, 36, 214);
  font-style: italic;
}

.home {
  background-image: url('/img-home.jpeg');
  background-size: cover;
  background-position: center;
  height: auto;  /* Utilise une hauteur auto pour éviter les chevauchements */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Le contenu reste en haut */
  align-items: center;
}

.projets {
  display: flex;
  gap: 30px;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  color: rgb(52, 136, 161);
  
}


.projet img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  border-radius: 50%;
  
}
.projet a {
  text-decoration: none;
}

.projet p {
  color: rgb(10, 250, 250);
  
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
  margin-top: 20px;
}

button:hover {
  background-color: #971d68;
}

/* Formulaire de contact */
.contact {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.contact-container {
  background-color: rgba(255, 255, 255, 0.6);
  width: 80%;
  max-width: 600px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.contact-container h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 5px;
}

input:hover, textarea:hover {
  background-color: #f0f0f0;
  border-color: #111010;
}

textarea {
  resize: none;
  height: 150px;
}

button {
  width: 500px;
  padding: 14px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
}

button:hover {
  background-color: #4cae4c;
}

/* Message de succès */
.success-message {
  margin-top: 20px;
  color: green;
  font-size: 1.2rem;
  text-align: center;
}

/* Message d'erreur */
.error-message {
  margin-top: 20px;
  color: white;
  font-size: 1.2rem;
  background-color: #e74c3c;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}


</style>
