<template>
<div>
    <p v-if="esta_trabalhando">Esrtou tentando trabalhar aq!</p> <!-- sempre trabalhar com if e else um ao lado do outro, pois se colocar em linhas oportas ela n irá reconhecer o if -->
    <p v-else> Em busca de um milhagre</p>
        <p>Utilizo as seguintes tecnologias para o back-end:</p>
        <ul>
            <li v-for="tecnologias in backend_tecnologias" v-bind:key="index"> {{ tecnologias }}</li>
        </ul>
        <p> Utilizo as seguintes tecnologias para o front-end:</p>
        <ul>
            <li v-for="tecnologias in frontend_tecnologias" :key="tecnologias.id"> {{ tecnologias.linguagem }}</li>
        </ul>
        <div>
            <button @click="showEmail">{{ texto_botao}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para : {{ email }}</p> <!-- o v-show apenas esconde o elemento, diferente do v-if que remove o elemento do DOM -->
        <p class="paragrafo">Para acessar meu portifas clique aq: <a v-bind:href="meu_link"> Clica ae</a></p>
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
                texto_botao : 'Mostrar email',
                meu_link: 'https://github.com/JuuhSouza/Estudos_vue',
                backend_tecnologias: [ 'JS', 'PHP', 'Postgresql'], /* ARRAY */
                frontend_tecnologias: [
                    {id : 1, linguagem: 'HTML'},
                    {id : 2, linguagem: 'CSS'},
                    {id : 3, linguagem: 'Vue.js'}
                ] /* OBJETO ARRAY*/
            }
        },
        methods: { /* método para mostrar email ou esconder */
            showEmail(){
                this.mostrar_email = !this.mostrar_email
                if(this.mostrar_email){
                    this.texto_botao = "Mostrar email"
                }else{
                    this.texto_botao = "Esconder email"
                }
            }
        }
    }
 </script>

 <style scoped> 
p{
    padding: .5em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
}

a{
    color:white;
    transition: all .4s ease;
    text-decoration: none;
}
a:hover{
    color:blue;
}

 </style>