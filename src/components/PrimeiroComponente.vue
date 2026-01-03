<template>
    <div>
        <h1>Olá vue.js</h1>
        <p>meu nome é {{ nome }} e tenho {{ idade }}</p> <!-- resultado escrito no data return -->
    </div>
</template>

<script>
    export default{
        name : 'PrimeiroComponente',
        data(){
            return{
                nome : "Júlia",
                idade : 20
            }
        }
    }
</script>