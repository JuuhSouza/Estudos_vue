<template>
    <h1>
        Meu nome é : {{ nome }}
    </h1>
</template>

<script>
    export default{
        name : 'LifeCycle',
        data(){
            return{
                nome : 'Ainda n sabemos'
            }
        },
        created(){
            setTimeout(() => { /* timer de aparecimento */
                this.nome = 'alguma coisa'
            },5000
        );
        },
        mounted(){
              setTimeout(() => {
                this.nome = 'SEU...'
            },5000
        );
        }
    }
</script>