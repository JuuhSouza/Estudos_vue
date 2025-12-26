<script lang="ts">
    export default{
        props:{
            texto: { type: String, required: true},
        }
    }
</script>

<template>
    <button class="paragrafo-lg botao-principal"> 
        {{ texto }}
    </button>
</template>

<style scoped>
    .botao-principal{
        width: 19.5rem;
        height: 3.5rem;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        color: var(--creme);
        background-color: var(--coral);
        box-shadow: 4px 4px 15px 0 rgba(255, 115, 76, .25);
        cursor: pointer;
        transition: all .4s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

     .botao-principal:hover{
        opacity: .5;
     }



</style>