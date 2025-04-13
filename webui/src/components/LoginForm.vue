<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label>
          Email:
          <input v-model="credentials.email" type="email" required />
        </label>
        <label>
          Password:
          <input v-model="credentials.password" type="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import type { PostLoginBody, PostLogin200, PostLogin401 } from '@/api/peekaboo_methods.schemas';
  
  export default defineComponent({
    name: 'LoginForm',
    setup() {
      const credentials = reactive<PostLoginBody>({
        email: '',
        password: '',
      });
      const error = ref<string | null>(null);
  
      const login = async () => {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
  
        if (response.ok) {
          const data: PostLogin200 = await response.json();
          alert(`Login successful! Token: ${data.token}`);
        } else {
          const errorData: PostLogin401 = await response.json();
          error.value = errorData.error ?? '';
        }
      };
  
      return { credentials, login, error };
    },
  });
  </script>