<template>
  <div id="app">
    <MenuTela v-if="this.$router.currentRoute.name !='Login'"></MenuTela>
    <router-view/>
  </div>
</template>
<script>

import MenuTela from './components/menu/MenuTela';

export default {

  components: {
  MenuTela
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Mandali&display=swap');
  :root{
    --cor-primaria: #212121;
    --cor-secundaria: #BDBDBD;
  }

body {
  margin: 0;
  padding: 0;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Mandali', sans-serif;
}

.container {
  margin-top: 15px;
}

.titulo {
  font-weight: 600;
  color: #363636;
}

hr{
  margin: 0;
}

.sub-container {
  margin-top: 15px;
}
</style>
