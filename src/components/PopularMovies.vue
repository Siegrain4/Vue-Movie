<template>
    <div class="mx-3">
      <h2 class="mt-2 grey--text">Popular Movies</h2>
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
          <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
            <MovieCard :movie="movie" :genres="genres" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  
  import MovieCard from '../components/MovieCard';

export default {
  components: {
    MovieCard,
  },
  data: function () {
    return {
      movies: [],
      genres: [],
      isLoading: true,
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get('/movie/popular');
      this.movies = response.data.results;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get('/genre/movie/list');
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