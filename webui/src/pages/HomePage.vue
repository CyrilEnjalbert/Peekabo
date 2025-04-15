<template>
  <div class="login-container">
    <div class="menu">
      <button type="button" @click="accessBirdListPage">🦜 Liste des Oiseaux</button>
      <button type="button" @click="accessBirdLocationPage">📍 Localisation d'un Oiseau</button>
      <button type="button" @click="accessGenLogin"> Gen Login</button>
      <button type="button" @click="accessGenLoginPage"> Gen Login Page</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();


const accessBirdListPage = () => {
  router.push("/birdlist");
};

const accessBirdLocationPage = () => {
  router.push("/birdlocation");
};

const accessLoginPage = () => {
  router.push("/login");
};


const accessGenLoginPage = () => {
  router.push("/sign_up");
};

const accessGenLogin = () => {
  router.push("/gen_login");
};


</script>


