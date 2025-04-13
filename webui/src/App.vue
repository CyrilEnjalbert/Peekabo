<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="header-content">
      <img src="../image_peekaboo.png" alt="Peekaboo Icon" class="chatbot-icon" width="auto"/>
      <h1 class="hometitle">Peekaboo</h1>
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
  
  <main>
    <RouterView />
  </main>

  <footer>
    <p>&copy; 2025 Peekaboo. All rights reserved.</p>
  </footer>
</template>

