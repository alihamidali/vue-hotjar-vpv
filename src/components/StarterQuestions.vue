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
  },
  mounted() {
    hj('vpv', 'starter_questions');
  }
}
</script>

<style scoped>

</style>
