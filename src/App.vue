<script lang="ts">
  import Banner from './components/Banner.vue'; //importar o componeste banner
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
import Rodape from './components/Rodape.vue';
import SelecionarIngredientes from './components/SelecionarIngredientes.vue';

  export default{
    components: { Banner, ConteudoPrincipal, Rodape} //chama o componente
  }
</script>

<template>
  <Banner/> <!-- componente -->
  <ConteudoPrincipal/> <!-- componente -->
  <Rodape/>
</template>

<style scoped>
 
</style>