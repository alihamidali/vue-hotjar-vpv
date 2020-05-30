<template>
  <div>
    <h2>Basic Signup</h2>
    <button @click="changeComponent">Next</button>
  </div>
</template>

<script>
export default {
  name: "BasicSignup",
  methods: {
    changeComponent(){
      this.$emit("changeComponent", "contact-info-component");
    }
  }
}
</script>

<style scoped>

</style>
