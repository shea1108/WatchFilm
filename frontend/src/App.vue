<template>
  <div id="app">

    <Header />


    <router-view />
  </div>
</template>

<script>

import Header from './components/partials/MainHeader.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style scoped>

</style>
