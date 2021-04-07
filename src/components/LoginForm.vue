<template>
  <div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <form class="add-form" @submit.prevent="submit">
      <div class="form-control">
        <label for="username">Username</label>
        <input
          id="login-username"
          type="string"
          name="username"
          v-model="formInput.username"
        />
      </div>

      <div class="form-control">
        <label for="username">Password</label>
        <input
          required
          id="login-password"
          type="password"
          name="password"
          v-model="formInput.password"
        />
      </div>

      <div class="form-control">
        <input type="submit" value="Login" class="btn" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase/app";
import "firebase/auth";

interface FormInput {
  username: string;
  password: string;
}

@Component
export default class LoginForm extends Vue {
  private formInput: FormInput = {
    username: "",
    password: "",
  };

  private error = "";

  submit(){
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.formInput.username,
        this.formInput.password
      )
      .then((data) => {
          this.$router.replace({name: "About"});
          return data;
      })
      .catch((error: firebase.FirebaseError) => {
        this.error = error.message;
      });
  }
}
</script>

<style scoped lang="scss">
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

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
