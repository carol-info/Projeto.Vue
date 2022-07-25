<template>
<div class="container">

  <div class="row">
    <div class="col-sm-12">
    <h1 class="titulo">Produtos</h1>
    <hr>
    </div>
  </div>


    <div class="row sub-container">
      <div class="col-sm-2">
        <Button value="Adicionar"></Button>
      </div>
    </div>

      <div class="row">
        <div class="col-sm-12">
          <table class="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor</th>
                <th>Data de cadastro</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
</div>

</template>

<script>

import Button from '../components/button/MeuButton.vue';
import produtoApi from '@/api/produto-api';
import produtoModel from '@/models/produto-model';

export default {
  name: 'ControleDeProdutos',
  components:{
    Button
  },
  data(){
    return {
      produtos: []
    }
  },
  methods:{
    obterTodosOsProdutos(){

      produtoApi.obterTodos()
      .then(response => {
        this.produtos = response.data.map(p => new produtoModel(p));
        console.log(this.produtos);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  beforeCreate(){
    alert('antes de ser criado')
  },
  created(){
    alert('fui criado')
  },
  mounted(){
    this.obterTodosOsProdutos();
  }
}
</script>

<style scoped>
  h1 {
    color:#212121;
  }
</style>
