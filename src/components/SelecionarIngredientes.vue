<script lang="ts">
import { obtercategorias } from '@/http/index'; /* exportar a lista no http */
import type ICategoria from '@/Interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

    export default{
        data() {
            return{
                categorias: [] as ICategoria[] /* chamar função do index.ts e ICategoria*/
            }
        }, async created() { /* created = criado, é uma função, método de ciclo de vida  */
            this.categorias = await obtercategorias();
        },
        components: {CardCategoria, BotaoPrincipal},
        emits: ['adicionarIngrediente', 'removerIngrediente']
    }
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>

        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categorias">
            <li v-for="categoria in categorias"
             :key="categoria.nome">
                <CardCategoria :categoria="categoria"
                @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                @remover-ingrediente ="$emit('removerIngrediente', $event)"
                />
            </li>
        </ul>
        <p class="paragrafo dica">
                * Atenção : consideramos que você tenha em casa água, sal e pimenta.
            </p>

            <BotaoPrincipal texto="Buscar Receitas"/>
    </section>
</template>

<style scoped> 
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>