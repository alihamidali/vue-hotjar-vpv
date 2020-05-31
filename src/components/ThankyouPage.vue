<template>
  <div>
    <h2>Thank You</h2>
  </div>
</template>

<script>
import triggerHotjarVPV from "../common";

export default {
  name: "ThankyouPage",
  mounted() {
    triggerHotjarVPV('finish');
  }
}
</script>

<style scoped>

</style>
