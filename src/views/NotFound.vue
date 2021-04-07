<template>
  <div class="container">
    <h2>404: Page not found</h2>
    <button @click="redirectToLogin" class="btn">Redirect to SignIn</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NotFound extends Vue {
  redirectToLogin() {
    this.$router.replace({ name: "Login" });
  }
}
</script>

<style>
.btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
</style>
