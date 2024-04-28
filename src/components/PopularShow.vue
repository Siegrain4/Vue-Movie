<template>
    <div class="mx-3">
      <h2 class="mt-2 grey--text">Popular Show</h2>
      <v-container fluid>
        <v-row align="center" justify="center" >
          <v-col cols="12" class="text-center">
            <template v-if="isLoading">
              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                indeterminate
                color="primary"
              />
            </template>
          </v-col>
          <v-col cols="12" sm="3" v-for="show in shows" :key="show.id">
            <ShowCard :show="show" :genres="genres" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  
  import ShowCard from '../components/ShowCard';

export default {
  components: {
    ShowCard,
  },
  data: function () {
    return {
        shows: [],
      genres: [],
      isLoading: true,
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get('/tv/popular');
      this.shows = response.data.results;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get('/genre/tv/list');
        this.genres = response.data.genres;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
  </script>
  
  <style>
  
  </style>