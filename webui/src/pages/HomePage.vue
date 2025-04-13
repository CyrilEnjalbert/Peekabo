<template>
  <div class="menu">
    <button type="button" @click="accessBirdListPage">🦜 Liste des Oiseaux</button>
    <button type="button" @click="accessBirdLocationPage">📍 Localisation d'un Oiseau</button>
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
</script>


