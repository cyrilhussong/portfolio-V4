<script>

</script>

<template>
    <header class="header">
        <nav class="nav-header">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projet">Projet</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <router-link to="/propos">À Propos</router-link>
        </nav>
        <nav class="titre-header">
            <h1><RouterLink to="/">Cyril Hussong</RouterLink></h1>
        </nav>
    </header>
</template>

<style scoped>
.titre-header a {
    text-decoration: none; 
    color: hwb(189 4% 4%);
}
.titre-header :hover {
    color: rgb(168, 42, 116);
    box-shadow: 0 -20px 30px;
}




.header {
    background-color: black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
    padding: 0 20px;
    margin: 0;
}

.nav-header {
    display: flex;
    gap: 20px; 
    color: rgb(168, 42, 116);  /* Changer la couleur pour bien voir */
    text-decoration: underline;
}

.nav-header :hover {
    color: rgb(168, 42, 116);
    box-shadow: 0 -20px 30px;
}

.titre-header {
    display: flex;
}

.nav-header a { 
    color: hwb(189 4% 4%); 
    text-decoration: none; 
}

/* Responsive design */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        height: auto;
        font-size: 24px;
        padding: 20px 0;
    }

    .nav-header {
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        gap: 10px;
    }

    .titre-header {
        margin-top: 10px;
        font-size: 28px;
    }
}
</style>
