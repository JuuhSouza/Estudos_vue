<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro(txt3, $event)" >Ativar Multiplos eventos</button>
        <p>{{ MultiplosEventos }}</p>
    </div>
</template>

<script>
    export default{
        name :  'MultiplosEventos',
        data(){
            return{
                MultiplosEventos: " ",
                txt1: "Primeiro evento ativado! ",
                txt2: "Segundo evento ativado! " /* mensagem dos eventos no button */
            }
        },
        methods: {
            primeiro(txt, e){
                this.MultiplosEventos = txt /* AO CLICAR NO BOTAO ELE IRA APARECER ESSA MENSAGEM */
            },
            segundo(txt, e){
                setTimeout(() => this.MultiplosEventos = txt, 1000)
            },
            terceiro(txt, e){
                setTimeout(() => this.MultiplosEventos = "", 1500) /* ultima mensagem vazia */
            }
        }
    }
</script>