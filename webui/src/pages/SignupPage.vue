<template>
  <div class="signup-page">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignup">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="input-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
      <p class="login-link">
        Already have an account? <router-link to="/login">Log in</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleSignup() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Handle signup logic here
      console.log('Signing up with:', this.username, this.password);
      // You can add your registration logic here
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