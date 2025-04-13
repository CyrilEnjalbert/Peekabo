<template>
  <div class="menu">
    <button type="button" @click="accessBirdListPage">🦜 Liste des Oiseaux</button>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const accessBirdListPage = () => {
  router.push("/birdlist");
};
</script>


