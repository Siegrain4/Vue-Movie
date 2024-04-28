<template>
    <div id="example">
      <h2 class="mx-3 grey--text">
        Upcoming Show
      </h2>
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :key="upcomingShow.length"
        :listData="upcomingShow"
        :height="500"
      >
        <slide :index="i" :key="i" v-for="(show, i) in this.upcomingShow">
          <figure>
            <img :src="'https://image.tmdb.org/t/p/w500/' + show.poster_path" />
            <figcaption>
              <v-btn :to="`/show/${show.id}`" text color="white"> {{ show.name }}</v-btn>
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </template>
  
  <script>
  import { Carousel3d, Slide } from "vue-carousel-3d";
  export default {
    data() {
      return {
        upcomingShow: [],
      };
    },
    components: {
      Carousel3d,
      Slide,
    },
    mounted() {
      this.fetchUpcomingShow();
    },
    methods: {
      async fetchUpcomingShow() {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/tv/airing_today"
        );
  
        this.upcomingShow = response.data.results.slice(1, 6);
        console.log(this.upcomingShow);
      },
    },
  };
  </script>
  
  <style>
  .carousel-3d-container figure {
    margin: 0;
  }
  
  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .next span,
  .prev span {
    color: red;
  }
  </style>