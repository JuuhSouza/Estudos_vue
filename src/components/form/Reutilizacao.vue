<template>
    <div>
        <button @click="ativar"> Clique aqui!!!</button>
        <span v-show="ativou"> Ativado </span> <!-- ira aparecer quando o botão for clicado -->
    </div>
</template>

<script>
    export default{
        name: 'Reutilizacao',
        data(){
            return{
                ativou: false
            }
        },
        methods: {
            ativar(){
                this.ativou = !this.ativou
            }
        }
    }
</script>