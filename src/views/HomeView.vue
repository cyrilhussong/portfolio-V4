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
      <div class="projet" @click="openModal('CV', '01/01/2025', ['Vue.js', 'CSS', 'HTML'], '/projet', 'https://github.com/cyrilhussong/portfolio-V4')"> 
        <img src="/cv-logo.jpeg" alt="projet-img">
        <p>CV</p>
      </div>
      
      <div class="projet" @click="openModal('Maquette', '15/02/2025', ['Figma'], '/maquette', '/github-maquette')">
        <img src="/logo-figma.png" alt="projet-img">
        <p>Maquette</p>
      </div>

      <div class="projet" @click="openModal('Formulaire de contact', '15/02/2025', ['Vue.js', 'CSS', 'HTML'], '/projet', 'https://github.com/cyrilhussong/portfolio-V4')">
        <img src="/img-formulaire.png" alt="projet-img">
        <p>Maquette</p>
      </div>
      
    </div>
    
    <router-link to="/projet">Projet<button >Découvrir</button></router-link>
    <hr>
    
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

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-btn" @click="closeModal">&times;</span>
        <h2>{{ modalTitle }}</h2>
        <p><strong>Date de création:</strong> {{ modalDate }}</p>
        <p><strong>Technologies utilisées:</strong> {{ modalTechnologies.join(', ') }}</p>
        <!-- Lien transformé en bouton pour redirection -->
        <button @click="goToProjet(modalLink)">Voir le projet</button>
        <a v-if="modalGitHub" :href="modalGitHub" target="_blank" class="modal-link">Voir sur GitHub</a>
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
      formError: false,
      isModalOpen: false,
      modalTitle: '',
      modalDate: '',
      modalTechnologies: [],
      modalLink: '',
      modalGitHub: ''
    };
  },
  methods: {
    goToProjet(lien) {
      // Si le lien est '/maquette', ouvrir le fichier PDF dans un nouvel onglet
      if (lien === '/maquette') {
        // Assurez-vous que le fichier PDF se trouve dans le dossier 'public' de Vue.js
        window.open('/maquette.pdf', '_blank'); // Modifiez le chemin en fonction de l'emplacement du fichier PDF
      } else {
        // Si ce n'est pas la maquette, rediriger vers une autre page
        this.$router.push(lien);
      }
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
    },
    openModal(title, date, technologies, link, github) {
      this.modalTitle = title;
      this.modalDate = date;
      this.modalTechnologies = technologies;
      this.modalLink = link;
      this.modalGitHub = github;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
/* Modal Styles - Positionné en haut à droite */
.modal {
  position: fixed;
  top: 20px;  /* Ajuste la position selon ton besoin */
  right: 20px; /* Place le modal à droite */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: auto;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px; /* Ajuste la largeur selon ton design */
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
}

.modal-link {
  display: block;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #007bff;
}

/* Autres styles déjà présents */
.form-group label {
  font-size: 1.5rem;
}

hr {
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
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
 
  
  border-radius: 50%;
  

}
.projet:hover img {
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.5); /* Ombre en bas à droite */
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

input,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 5px;
}

input:hover,
textarea:hover {
  background-color: #f0f0f0;
  border-color: #111010;
}

textarea {
  resize: none;
  height: 150px;
}

button {
  width: 300px;
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
