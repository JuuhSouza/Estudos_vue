<template>
  <PrimeiroComponente/>
  <LifeCycle/>
  <Pessoa/>
  <h1>olá mundinho loko</h1>
  
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue' //importar a pasta
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'

  export default{
    name : 'App',
    components:{ 
      PrimeiroComponente /* componente a ser puxado do components */ ,
      LifeCycle,
      Pessoa
    }
  }
</script>