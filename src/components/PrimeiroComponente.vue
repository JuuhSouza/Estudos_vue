<template>
    <div>
        <h1>Olá vue.js</h1>
        <p>meu nome é {{ nome }} e tenho {{ idade }}</p> <!-- resultado escrito no data return -->
        <MultiplosEventos/>
        <Reutilizacao/>
    </div>
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue'
    import Reutilizacao from './form/Reutilizacao.vue'

    export default{
        name : 'PrimeiroComponente',
        components:{ MultiplosEventos, Reutilizacao},
        data(){
            return{
                nome : "Júlia",
                idade : 20
            }
        }
    }
</script>