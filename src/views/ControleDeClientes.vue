<template>

  <div>
    <h1>{{ mensagem }}</h1>
  </div>

</template>

<script>
export default {
  name: 'ControleDeClintes',
  data(){
    return {
      mensagem: 'Estou na tela Controle de clientes'
    }
  }
}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
