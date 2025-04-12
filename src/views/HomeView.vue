<template>
  <main class="home">
    <div class="h1">
      <h1>Bienvenue sur mon Portfolio</h1>
    </div>

    <div class="paragraphe">
      <p>Bonjour ! Je suis Cyril Hussong, un développeur web junior passionné par la création d’expériences interactives et modernes.
        Après une carrière dans la boucherie, j'ai décidé de me reconvertir dans le développement web.
        J'aime apprendre, résoudre des problèmes et concevoir des interfaces élégantes et fonctionnelles.
      </p>
    </div>

    <div class="projets">
      <div class="projet" @click="openModal('CV', '01/01/2025', ['Vue.js', 'CSS', 'HTML'], '/projet', 'https://github.com/cyrilhussong/portfolio-V4')">
        <img :src="`${baseUrl}cv-logo.jpeg`" alt="projet-img" />
        <p>Mon CV</p>
      </div>

      <div class="projet" @click="openModal('Maquette', '15/02/2025', ['Figma'], '/maquette.pdf', 'https://github.com/cyrilhussong/portfolio-V4/blob/main/public/maquette.pdf')">
        <img :src="`${baseUrl}logo-figma.png`" alt="projet-img" />
        <p>Maquette</p>
      </div>

      <div class="projet" @click="openModal('Formulaire de contact', '15/02/2025', ['Vue.js', 'CSS', 'HTML'], '/contact', 'https://github.com/cyrilhussong/portfolio-V4')">
        <img :src="`${baseUrl}img-formulaire.png`" alt="projet-img" />
        <p>Formulaire-contact</p>
      </div>
    </div>

    <hr />

    <!-- Formulaire -->
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
            <label for="message">Message:💬</label>
            <textarea v-model="message" id="message" rows="4" required></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>

        <div v-if="formSubmitted" class="success-message">
          <p>Merci, {{ nom }} ! Votre message a été envoyé.</p>
        </div>

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
      baseUrl: import.meta.env.BASE_URL,
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
      const isPdf = lien.endsWith('.pdf');
      const path = `${import.meta.env.BASE_URL}${lien.replace(/^\//, '')}`;
      isPdf ? window.open(path, '_blank') : this.$router.push(lien);
    },
    handleSubmit() {
      if (this.nom && this.email && this.message) {
        this.formSubmitted = true;
        this.formError = false;
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
.home {
  background-image: url('/img-home.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h1 {
  text-align: center;
  font-size: 50px;
  color: rgb(173, 36, 214);
  font-style: italic;
  margin-top: 30px;
}

.paragraphe {
  font-size: 3rem;
  font-style: italic;
  color: rgb(12, 241, 241);
  text-align: center;
  margin: 30px 10px;
}

.projets {
  display: flex;
  gap: 30px;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  color: rgb(52, 136, 161);
  flex-wrap: wrap;
}

.projet img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}

.projet:hover img {
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.5);
}

.projet p {
  color: rgb(10, 250, 250);
}

hr {
  width: 80%;
  height: 0.5px;
  background-color: white;
  margin: 50px auto;
}

.contact {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contact-container {
  background-color: rgba(255, 255, 255, 0.6);
  width: 80%;
  max-width: 600px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
}

.contact-container h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
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
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
}

button:hover {
  background-color: #971d68;
}

.success-message {
  margin-top: 20px;
  color: green;
  font-size: 1.2rem;
}

.error-message {
  margin-top: 20px;
  background-color: #e74c3c;
  color: white;
  padding: 15px;
  border-radius: 10px;
}

.modal {
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 900px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
}

.modal-link {
  display: block;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #007bff;
}

@media screen and (max-width: 768px) {
  .h1 {
    font-size: 28px;
  }

  .paragraphe {
    font-size: 1.3rem;
  }

  .projets {
    flex-direction: column;
    gap: 20px;
  }

  .projet img {
    width: 200px;
    height: 200px;
  }

  .modal-content {
    width: 95%;
    padding: 15px;
  }

  button {
    font-size: 1rem;
  }

  .modal-link {
    font-size: 1rem;
  }
}
</style>
