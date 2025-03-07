<template>
    <div class="body-cv">
      <!-- Header -->
      
  
      <div class="cadrecv">
        <header>
          <div class="photo">
            
              <img class="moi" src="/image.cv.jpg" alt="photo/profil" />
            
          </div>
  
          <div class="nom">
            <h1>Cyril Hussong</h1>
            <h2>Développeur Web Junior</h2>
          </div>
  
          <nav class="headeradresse">
            <div class="adresse">
              <a href="https://www.google.com/maps">
                <p class="rue">4 rue basse</p>
                <p>St Pons de Thomières</p>
                <p class="rue">34220</p>
              </a>
            </div>
  
            <div class="mail">
              <a href="mailto:cyrilhussong347@gmail.com">cyrilhussong347@gmail.com</a>
            </div>
  
            <div class="tel">
              <a href="tel:0611497479">0611497479</a>
            </div>
          </nav>
        </header>
  
        <main>
          <section class="contpetit">
            <h3>À propos</h3>
            <div class="textfond">
              <p>26 ans, <br />J'ai obtenu mon CAP boucher en 2022, puis je suis devenu chef boucher depuis 3 ans (Intermarché).</p>
            </div>
  
            <h3>Langues parlées</h3>
            <div class="textfond">
              <ul>
                <li>Français</li>
                <li>Anglais</li>
              </ul>
            </div>
  
            <h3>Centres d'intérêt</h3>
            <div class="textfond">
              <ul>
                <li>Sport</li>
                <li>Apprendre</li>
                <li>Voyager</li>
                <li>Pêche</li>
              </ul>
            </div>
          </section>
  
               <!-- Section expériences et formations -->
               <section class="contcentre">
                <div class="petitcentre">
                    <h2>Expérience</h2>
                </div>

                <div class="titre">
                    <h4>Menuiserie</h4>
                    <p class="date">2019/2020</p>
                    <ul>
                        <li>Précision de mesure</li>
                        <li>Sécurité au travail</li>
                        <li>Rigueur</li>
                    </ul>

                    <h4>Mécanicien</h4>
                    <p class="date">2017/2018</p>
                    <ul>
                        <li>Identification des problèmes</li>
                        <li>Réparation des pièces et remplacement</li>
                        <li>Utilisation d'outils et d'équipements spécialisés</li>
                    </ul>

                    <h4>Boucher</h4>
                    <p class="date">2021/2024</p>
                    <ul>
                        <li>Gestion d'une boucherie</li>
                        <li>Découpe</li>
                        <li>Vente directe</li>
                    </ul>
                </div>

                <div class="petitcentre">
                    <h2>Diplômes/Formations</h2>
                </div>

                <div class="titre">
                    <p class="cap">CAP boucher<br>2021/2022<br>Lézignan-Corbières</p>
                </div>

                <div class="petitcentre">
                    <h2>Compétences</h2>
                </div> 

                <div class="competance">
                    <ul>
                        <li>HTML 5 - Débutant</li>
                        <li>CSS 3 - Débutant</li>
                        <li>GitHub - Débutant</li>
                        <li>Sérieux</li>
                    </ul>
                </div>
            </section>
        </main>
  
        <footer>
          <div class="social-links">
            <a href="https://github.com/cyrilhussong/portfolio-V4" target="_blank" style="color: red;">GitHub</a>
            <a href="https://www.linkedin.com/feed/" target="_blank" style="color: red;">LinkedIn</a>
          </div>
          <p>Dernière mise à jour : 09/02/2025</p>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CvPage",
  };
  </script>
  
  <style scoped>
  .body-cv {
    font-family: "Raleway", sans-serif;
    width: 100% ;
    margin: 0;
    padding: 0px;
    background-image: url('/img-form.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    justify-content: center; /* Centre horizontalement */
    align-items: center; /* Centre verticalement */
    
  }
  
  .navcv {
    margin-left: 25px;
  }
  
  .navcv ul {
    margin-right: 25px;
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  .navcv ul li a {
    text-decoration: none;
    color: white;
  }
  
  .divcv {
    background-image: url("@/assets/imgdev.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }
  
  .divcv h1 {
    text-align: center;
    color: white;
  }
  
  .cadrecv {
    margin: 0 ;
    padding: 0;
    background-color: #2F4F4F;
    margin: 250px;
    
  }
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: white;
   
  }
  .adresse{
    display: flex;
    margin-left: 25px;
    
  }
  
  
  
  .headeradresse {
    display: flex;
    background-color: #9a8987;
    padding: 10px;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px;
  padding: 0px;
  border-radius: 50ch;
    }
  
  .headeradresse a {
    color: white;
    text-decoration: none;
    margin-right: 25px;
    
  }
  
  .headeradresse a:hover {
    text-decoration: underline solid white 2px;
  }
  
  .moi {
    width: 150px;
    border-radius: 90px;
    box-shadow: 0 0 50px 10px white;
    margin-top: 10px;
  }
  
  main {
    display: flex;
  }
  
  .contpetit {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-right: 40px;
    color: white;
    
  }
  
  .contpetit h3 {
    color: black;
    background-color: #dbc2a4;
    padding: 5px 15px;
    border-radius: 20px;
  }
  
  .textfond {
    color: white;
    padding: 10px;
    text-align: center;
    

  }
  .textfond ul li{
    list-style-type: none;
  }
  

  .petitcentre {
    background-color: #dbc2a4;
    width: 600px;
    padding: 10px;
    border-left: solid #782221 5px;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  
  
  
  .contcentre {
    background-color: white;
    width: 70%;
    border-right: solid black;
    padding: 20px;
    border-radius: 5%;
    
  }
  
  h2, h4, .date, .cap, .titre {
    margin-left: 20px;
  }
  
  .competance {
    margin-left: 50px;
  }
  
  footer {
    text-align: center;
    color: white;
    padding: 20px;
  }
  
  .social-links a {
    margin: 0 10px;
    font-weight: bold;
  }
  
  .top {
    width: 40px;
    margin-left: 30px;
  }
  
  .top a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 20px;
    font-weight: 900;
  }
  .nom h1{
    text-align: center;
  }
  
  </style>
  