<script lang="ts">
    export default{
        data(){
            
        }
    }
</script>

<template>
    <footer class="rodape paragrafo">
        Desenvolvido por Júlia | 2025 - Projeto Alura
    </footer>
</template>

<style scoped>
    .rodape{
        background-color: var(--verde-escuro);
        padding: 1.5rem 7.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
}

@media only screen and (max-width: 1300px) {
    .rodape{
        padding: 1.5rem 3.75rem;
    }
}
</style>