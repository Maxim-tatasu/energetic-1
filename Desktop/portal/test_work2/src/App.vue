<template>
<div>
  <game/>
</div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import game from './components/game.vue'
//import MedForm from './components/MedForm.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
   game,
   // MedForm
  }
}
</script>

<style>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
