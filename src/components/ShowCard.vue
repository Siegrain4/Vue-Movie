<template>
    <v-hover
  v-slot="{ hover }"
  open-delay="200"
>
  <v-card :elevation="hover ? 16 : 2" :class="{'on-hover': hover}">
    <router-link :to="`/show/${show.id}`">
      <v-img :src="posterPath" alt=""></v-img>
    </router-link>
    <v-card-title class="subtitle-2">{{ show.name }}</v-card-title>
    <v-card-text>
      <v-row align="center">
        <v-rating
          :value="show.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="ml-2">
          <div>{{ show.vote_average * 10 }} %</div>
          <div>{{ show.release_date }}</div>
        </div>
      </v-row>
      <div class="my-4 subtitle-2">
        <span v-for="(genre, index) in show.genre_ids" :key="genre">
          <span>{{ genreTypeName(genre, index) }}</span>
          <span v-if="index !== show.genre_ids.length - 1">,</span>
        </span>
      </div>
    </v-card-text>
  </v-card>
</v-hover>
  </template>
  
  <script>

  export default {
    props: {
        show: {
        required: true,
      },
       genres: {
        required: true,
      }
    },
    computed: {
      posterPath(){
        return "https://image.tmdb.org/t/p/w500/" + this.show.poster_path
      },
      
    },
    methods: {
      genreTypeName(genreId, index) {
  
        for(const item of this.genres) {
          if(item.id == genreId) {
            if(this.movie.genre_ids.length - 1 == index){
              return item.name ;
            }else {
              return item.name + ",";
            }
            
          }
        }
      }
    }
  }
  </script>
  
  <style>
  .rating-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .rating-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
  </style>