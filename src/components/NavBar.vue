<template>
  <nav>
    <v-app-bar app color="#051650" dark elevation="4">
        <v-icon class="mr-2" id="movie-icon">fas fa-video</v-icon> 
        <v-toolbar-title class="mr-auto">Movie Plus + </v-toolbar-title>
        <v-btn text class="ml-2" to="/">Movies</v-btn>
        <v-btn text class="ml-2" to="/show">TV SHOW</v-btn>
        <v-spacer></v-spacer>
    </v-app-bar>
    
    
  </nav>
</template>

<script>
export default {
    data:()=>({
        drawer:null,
        showSearch: false,
      searchQuery: ''
    }),
    methods: {
        toggleSearch() {
      this.showSearch = !this.showSearch;
    }
    }
}
</script>

<style>
#movie-icon{
    padding-left: 20px;
}
.search-container {
    display: flex;
    align-items: center;
  }
  
  .search-icon {
    margin-right: 10px;
  }

  .search-container {
    display: flex;
    align-items: center;
    margin-top: 20px; /* Sesuaikan nilai margin-top sesuai keinginan */
  }
</style>