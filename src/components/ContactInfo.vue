<template>
  <div>
    <h2>Contact Info</h2>
    <button @click="changeComponent">Next</button>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  methods: {
    changeComponent() {
      this.$emit("changeComponent", "final-questions-component");
    }
  }
}
</script>

<style scoped>

</style>
