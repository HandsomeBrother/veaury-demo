<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <BasicPure />
  <HooksComponentVue />

</template>

<script >
import { HooksComponentVue } from '../adapter/dist/index.js'
import { StatPanelVue } from '../adapter/dist/index.js'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    BasicPure: StatPanelVue,
    HooksComponentVue: HooksComponentVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
../../src/hooks/hooksComponent