<template>
  <div class="container">
    <UserInformation v-bind:userInfo="userInfo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "../types/User";
import UserInformation from "@/components/UserInformation.vue";

@Component({
  components: {
    UserInformation,
  },
})
export default class Profile extends Vue {
  private userInfo: User = this.$store.getters;

  constructor() {
    super();
  }
}
</script>
