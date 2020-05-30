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
    },
    initHotjar() {
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1834635,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    }
  },
  computed: {
    getCurrentComponent: function() {
      return {currentComponent:this.currentComponent};
    }
  },
  mounted() {
    this.initHotjar()
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
