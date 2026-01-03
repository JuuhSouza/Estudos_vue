<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
    export default{
        name : 'Picture',
        data(){
            return{
                avatar: "/img/Avatar.jpg",
                descricao: "Foto em preto e branco da minha família"
            }
        }
    }   
</script>