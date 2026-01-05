<template>
    <h2>
        Formulário :
    </h2>
    <form action="" @submit="enviarFormulario($event)"> <!-- o $event pega o evento padrão do formulário -->
        <div class="input">
            <input type="text" v-model="name">
        </div>    
        <div class="input">
            <input type="text" v-model="email">
        </div>
        <div class="input">
            <Submit/>
        </div>
    </form>
    <p>testandddddoooo</p>
    <p>testandddddoooo</p>
    <p>testandddddoooo</p>
</template>

<script>
    import InputText from './form/InputText.vue'
    import Submit from './form/Submit.vue'

    export default{
        name : 'Form',
        components: {
            InputText, Submit
        },
        data(){
            return{
                name: "",
                email: ""
            }
        },
        methods: {
            enviarFormulario(e){
                e.preventDefault() /* previne o comportamento padrão do formulário que é recarregar a página */
                const name = this.name;
                const email = this.email;
                
                console.log('Formulário enviado com sucesso!')
                console.log("O nome é: " + name);
                console.log("O email é: " + email);

                //AJAX ou API para enviar os dados para o backend

                // inserir no banco de dados
            }
        }
    }
</script>

<style>
      body{
        background-color: rgb(72, 72, 72);
        color: white;
    }
    p{
        margin: 50px;
    }

    form{
        margin: 20px;
    }

    .input{
        margin-bottom: 10px;
        padding: .6em .6em;
    }

</style>