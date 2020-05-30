<template>
  <div id="app">
    <component v-bind:is="currentComponent" v-bind="getCurrentComponent" @changeComponent="changeActiveComponent"></component>
  </div>
</template>

<script>
import StarterQuestions from './components/StarterQuestions'
import BasicSignup from './components/BasicSignup'
import ContactInfo from './components/ContactInfo'
import FinalQuestions from './components/FinalQuestions'
import ThankyouPage from './components/ThankyouPage'

export default {
  name: 'App',
  components: {
    'starter-questions-component': StarterQuestions,
    'basic-signup-component': BasicSignup,
    'contact-info-component': ContactInfo,
    'final-questions-component': FinalQuestions,
    'thank-you-component': ThankyouPage,
  },
  data () {
    return {
      currentComponent: 'starter-questions-component',
    }
  },
  methods: {
    changeActiveComponent(componentName) {
      this.currentComponent = componentName;
    }
  },
  computed: {
    getCurrentComponent: function() {
      return {currentComponent:this.currentComponent};
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
