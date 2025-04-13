<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

// Mock authentication state
let isAuthenticated = false;

const handleLogin = () => {
  if (username.value && password.value) {
    isAuthenticated = true; // Set authentication state to true
    alert(`Bienvenue, ${username.value}!`);
    router.push("/"); // Redirect to the home page after login
  } else {
    alert("Veuillez entrer un nom d'utilisateur et un mot de passe.");
  }
};
</script>

<template>
  <div style="max-width: 400px; margin: 50px auto; text-align: center;">
    <h1>Connexion</h1>
    <div style="margin-bottom: 20px;">
      <label for="username">Nom d'utilisateur:</label>
      <input
        id="username"
        type="text"
        v-model="username"
        placeholder="Entrez votre nom d'utilisateur"
        style="width: 100%; padding: 10px; margin-top: 5px;"
      />
    </div>
    <div style="margin-bottom: 20px;">
      <label for="password">Mot de passe:</label>
      <input
        id="password"
        type="password"
        v-model="password"
        placeholder="Entrez votre mot de passe"
        style="width: 100%; padding: 10px; margin-top: 5px;"
      />
    </div>
    <button @click="handleLogin" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer;">
      Connecter
    </button>
  </div>
</template>