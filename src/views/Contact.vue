<template>
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
</template>

<script>
import emailjs from 'emailjs-com';

export default {
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
    handleSubmit() {
      if (this.nom && this.email && this.message) {
        // Si tous les champs sont remplis, le formulaire est soumis avec succès
        this.formSubmitted = true;
        this.formError = false;

        // Paramètres à envoyer
        const templateParams = {
          from_nom: this.nom,
          from_email: this.email,
          from_message: this.message,
          to_email: 'cyrilhussong347@gmail.com'  // Ajout de l'email de destination ici
        };

        // Envoi du message via EmailJS
        emailjs.send('cyril', 'template_id', templateParams, 'Pf4uUW3lZCxp3B9I-')  // Remplace 'service_id', 'template_id' et 'user_id' par les valeurs correctes.
          .then((response) => {
            console.log('Message envoyé avec succès', response);
          })
          .catch((error) => {
            console.error('Erreur d\'envoi de message', error);
            this.formError = true;
          });

        // Réinitialisation du formulaire
        this.nom = '';
        this.email = '';
        this.message = '';
      } else {
        // Si un champ est vide, afficher l'erreur
        this.formSubmitted = false;
        this.formError = true;
      }
    }
  }
};
</script>

<style scoped>
.form-group label {
  font-size: 1.5rem;
}
.contact {
  background-image: url('/img-form.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  color: white;
  padding: 250px 20px; /* Ajusté pour mieux centrer */
  min-height: 100vh; /* Prendre toute la hauteur */
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container {
  background-color: rgba(255, 255, 255, 0.9); /* Fond légèrement transparent */
  width: 80%;
  max-width: 600px;
  padding: 30px;
  border-radius: 25px;  /* Coins arrondis pour effet bulle */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); /* Ombre douce pour donner l'effet de flotter */
  transform: translateY(-20px); /* Légèrement relevé */
  animation: floatEffect 1s ease-in-out infinite alternate;
}

@keyframes floatEffect {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(20px);
  }
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
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
  border-radius: 10px;  /* Coins arrondis pour les champs */
  box-sizing: border-box;
  margin-top: 5px;
  
}
input:hover, textarea:hover {
  background-color: #f0f0f0;  /* Gris clair */
  border-color: #111010;         /* Bordure légèrement plus foncée */
}

textarea {
  resize: none;
  height: 150px;
}

button {
  width: 100%;
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
  animation: successMessage 1s ease-out;
}

@keyframes successMessage {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Message d'erreur */
.error-message {
  margin-top: 20px;
  color: white;
  font-size: 1.2rem;
  background-color: #e74c3c; /* Rouge vif */
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
