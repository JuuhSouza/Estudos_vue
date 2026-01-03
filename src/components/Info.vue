<template>
<div>
    <p v-if="esta_trabalhando">Esrtou tentando trabalhar aq!</p> <!-- sempre trabalhar com if e else um ao lado do outro, pois se colocar em linhas oportas ela n irá reconhecer o if -->
    <p v-else> Em busca de um milhagre</p>
        <p>Tecnologias aprendidas: {{  }}</p>
        <ul>
            <li> JavaScript</li>
            <li> Vue.js </li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para : {{ email }}</p>
</div>
</template>
 
<script>
    export default{
        name : 'Info',
        data(){
            return{
                esta_trabalhando : true,
                mostrar_email: true,
                email: 'Julia@gmail.com'
            }
        }
    }
 </script>