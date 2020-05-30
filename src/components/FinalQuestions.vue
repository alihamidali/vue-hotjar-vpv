<template>
  <div>
    <h2>Final Questions</h2>
    <button @click="changeComponent">Next</button>
  </div>

</template>

<script>
export default {
  name: "FinalQuestions",
  methods: {
    changeComponent() {
      this.$emit("changeComponent", "thank-you-component");
    }
  },
  mounted() {
    hj('vpv', 'final_questions');
  }
}
</script>

<style scoped>

</style>
