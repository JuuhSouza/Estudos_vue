<template>
    <div class="container">
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem"/>
    </div>
</template>

<script>
    import Reutilizacao from './form/Reutilizacao.vue';
    import MudarImagem from './MudarImagem.vue';

    export default{
        name : 'Picture',
        components: {
            Reutilizacao,
            MudarImagem
        },
        data(){
            return{
                avatar: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbm8lMjBkZSUyMGZ1bmRvJTIwcGFpc2FnZW18ZW58MHx8MHx8fDA%3D",
                descricao: "Foto"
            }
        },
        methods: {
            trocarImagem(){ /* trocar img ao clicar no botao */
                this.avatar = "https://i.etsystatic.com/59458872/r/il/66bec6/7055059105/il_fullxfull.7055059105_xvk9.jpg"
            }
        }
    }   
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2em;
    }
    
    img{
        width: 200px;
        height: 200px;
        border-radius: 20%;
    }
</style>