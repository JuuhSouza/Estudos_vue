<template>
<div>
    <p v-if="esta_trabalhando">Esrtou tentando trabalhar aq!</p> <!-- sempre trabalhar com if e else um ao lado do outro, pois se colocar em linhas oportas ela n irá reconhecer o if -->
    <p v-else> Em busca de um milhagre</p>
        <p>Tecnologias aprendidas: {{  }}</p>
        <ul>
            <li> JavaScript</li>
            <li> Vue.js </li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para : {{ email }}</p> <!-- o v-show apenas esconde o elemento, diferente do v-if que remove o elemento do DOM -->
        <p>Para acessar meu portifas clique aq: <a v-bind:href="meu_link"> Clica ae</a></p>
        <Picture />
</div>
</template>
 
<script>
import Picture from './Picture.vue'

    export default{
        name : 'Info',
        components:{
            Picture
        },
        data(){
            return{
                esta_trabalhando : true,
                mostrar_email: true,
                email: 'Julia@gmail.com',
                meu_link: 'https://github.com/JuuhSouza/Estudos_vue'
            }
        }
    }
 </script>