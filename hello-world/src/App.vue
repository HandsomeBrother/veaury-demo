<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <BasicPure/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {applyPureReactInVue} from 'veaury'
import { HooksComponent } from '../../dist/index.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BasicPure: applyPureReactInVue(HooksComponent)
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