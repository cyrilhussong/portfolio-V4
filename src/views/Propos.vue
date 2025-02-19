
    <template>
  <div class="about">
    <div class="container">
      <h1>À Propos</h1>
      
      <section class="presentation">
        <img src="/image.cv.jpg" alt="Photo de profil" class="profile-pic">
        <p>
          Bonjour ! Je suis <strong>Cyril Hussong</strong>, un développeur web junior passionné par la création d’expériences interactives et modernes. 
          Après une carrière dans la boucherie, j'ai décidé de me reconvertir dans le développement web. 
          J'aime apprendre, résoudre des problèmes et concevoir des interfaces élégantes et fonctionnelles.
        </p>
      </section>

      <section class="skills">
        <h2>Compétences</h2>
        <ul>
          <li>🔥 HTML / CSS / JavaScript</li>
          <li>⚛️ Vue.js & React.js</li>
          <li>🎨 UI/UX Design (Figma, Tailwind CSS)</li>
          <li>💻 Git & GitHub</li>
          <li>🛠️ API & Backend Basics</li>
        </ul>
      </section>

      <section class="goals">
        <h2>Mes Objectifs</h2>
        <p>
          Mon ambition est de devenir développeur full-stack en maîtrisant à la fois le **frontend** et le **backend**. 
          J’aimerais travailler sur des projets innovants et collaborer avec des équipes créatives pour repousser les limites du web.
        </p>
      </section>

      <router-link to="/projet" class="cta-button">Voir mes projets 🚀</router-link>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image:url(/img-footer.jpeg) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container {
  width: 80%;
  max-width: 800px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1, h2 {
  color: #333;
}

.presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.skills ul {
  list-style: none;
  padding: 0;
}

.skills li {
  background: #ddd;
  display: inline-block;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 5px;
  font-weight: bold;
}

.goals p {
  margin-top: 10px;
  font-size: 1rem;
}

.cta-button {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}

.cta-button:hover {
  background: #0056b3;
}
</style>

