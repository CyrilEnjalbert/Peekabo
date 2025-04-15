<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <form @submit.prevent="handleLogin">
        <!-- Username Input -->
        <div class="input-group">
          <label for="username">Identifiant</label>
          <input type="text" id="username" v-model="username" placeholder="Entrez votre identifiant" required />
        </div>

        <!-- Password Input -->
        <div class="input-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" placeholder="Entrez votre mot de passe" required />
        </div>

        <!-- Actions -->
        <div class="login-actions">
          <router-link to="/signup" class="login-link">Pas encore inscrit ? Inscription</router-link>
          <button type="submit" class="signup-button">Connexion</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      console.log('Logging in with:', this.username, this.password);
      // Add login logic here
    },
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.signup-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #0056b3;
}

.login-link {
  margin-top: 10px;
  text-align: center;
}
</style>