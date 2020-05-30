<template>
  <div>
    <h2>Starter Questions</h2>
    <button @click="changeComponent">Next</button>
  </div>
</template>

<script>
export default {
  name: "StarterQuestions",
  methods: {
    changeComponent() {
      this.$emit('changeComponent', 'basic-signup-component');
    }
  }
}
</script>

<style scoped>

</style>
