<template>
  <div>
    
    <game/>
  </div>
</template>

<script>
//import MedForm from '@/components/MedForm.vue';
import game from '@/components/game.vue'

export default {
  name: 'App',
  components: {
   // MedForm,
    game
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
