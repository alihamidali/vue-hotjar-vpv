<template>
  <div>
    <h2>Basic Signup</h2>
    <button @click="changeComponent">Next</button>
  </div>
</template>

<script>
import triggerHotjarVPV from "../common";

export default {
  name: "BasicSignup",
  methods: {
    changeComponent(){
      this.$emit("changeComponent", "contact-info-component");
    }
  },
  mounted() {
    triggerHotjarVPV('signup');
  }
}
</script>

<style scoped>

</style>
