<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>

        <Input
        label="E-mail"
        placeHolder="exemplo@gmail.com"
        ></Input>

        <Input
        label="Senha"
        placeHolder="Insira a senha"
        type="password"></Input>
        <Button value="Entrar" :callback="login"></Button>
    </div>
</template>

<script>
import Input from "@/components/input/MeuInput.vue"
import Button from "@/components/button/MeuButton.vue"
export default {
    name: 'LoginInput',
    components:{
        Input,
        Button
    },
    data(){
        return {

        }
    },
    methods:{
        login(){
            this.$router.push({name:'Dashboard'})
     }
    }
}

</script>

<style scoped>


    .box-login{
        width: 300px;
        margin: auto;
        border: 1px solid #ddd;
        margin-top: 70px;
        padding: 30px;
    }

    .logo {
        text-align: center;
        color: var(--cor-primaria);
        font-size: 22px;
    }
</style>