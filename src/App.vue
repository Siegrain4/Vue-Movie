<template>
  <v-app>
   <NavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterComp/>
  </v-app>
</template>

<script>

import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components:{
    NavBar,
    FooterComp
  },

  data: () => ({
    //
  }),
};
</script>
