<template>
    <div>
      <UpcomingShow/>
      <PopularShow/>
    </div>
  </template>
  
  <script>
  import UpcomingShow from '@/components/UpcomingShow.vue';
  import PopularShow from '@/components/PopularShow.vue';
  
    export default {
      name: 'HomeView',
      components: {
        UpcomingShow,
        PopularShow
      }
  
    }
  </script>
  