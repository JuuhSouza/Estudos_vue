<template>
    <div>
        <button @click="$emit('mudarImagem')"> Trocar imagem de perfil </button>
    </div>
</template>

<script>
    export default{
        name : 'MudarImagem',
        emits: ['mudarImagem']
    }
</script>

<style scoped>
    div{
        margin-top: 1em;
    }

    button{
        padding: 0.5em 1em;
        border-radius: 5px;
        border: none;
        background-color: black;
        color: white;
        cursor: pointer;
        font-size: 1em;
        transition: all .4s ease;
    }

    button:hover{
        box-shadow: 0 0 3px black;
        background: transparent;
    }
</style>