<script setup lang="ts">
let socials = [
  {
    text: "Github",
    logo: "akar-icons:github-fill",
    link: "https://github.com/Bendemeurichy"
  },
  {
    text: "linkedin",
    logo: "skill-icons:linkedin",
    link: "https://www.linkedin.com/in/ben-de-meurichy-93a0a1237/"
  },
  {
    text: "Mail",
    logo: "logos:google-gmail",
    link: "mailto:ben.demeurichy@gmail.com"},
  {
    text: "Spotify",
    logo: "logos:spotify-icon",
    link: "https://open.spotify.com/user/ben.demeurichy?si=6369c53a4bab4950"
  }
]

</script>

<template>
<div class="container">
  <div class="card" v-for="social in socials" >
      <a :href="social.link" target="_blank">
        <div class="icon">
          <Icon :name="social.logo" size="2em" color="var(--text)"/>
        </div>
        <span>{{social.text}}</span>
      </a>
  </div>

</div>
</template>

<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.7em;
  width: fit-content;
  height: fit-content;
  padding: 1em;
  transition: all 0.5s;
  z-index: 1;
}

span{
  color: var(--text);
  font-size: 1.5em;
  transition: all 0.5s;
}

a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.icon {
  margin-right: 0.5em;
  flex: 0;
}

.card{
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  transition: all 0.5s;
  width: fit-content;
  height: fit-content;
  color: var(--text);
  border-radius: 20%;
}
.card:hover{
  text-shadow: var(--text) 0.3em 0.3em 0.3em;
  color: var(--background);
  transition: all 0.5s;
  cursor: pointer;
}
</style>