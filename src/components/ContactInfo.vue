<template>
  <div>
    <h2>Contact Info</h2>
    <button @click="changeComponent">Next</button>
  </div>
</template>

<script>
import triggerHotjarVPV from "../common";

export default {
  name: "ContactInfo",
  methods: {
    changeComponent() {
      this.$emit("changeComponent", "final-questions-component");
    }
  },
  mounted() {
    triggerHotjarVPV('contact_info');
  }
}
</script>

<style scoped>

</style>
