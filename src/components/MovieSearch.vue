<template>
  <b-container>
    <b-row class="mt-4">
      <b-col>
        <div class="input-group">
          <div class="input-group-prepend">
            <b-button variant="outline-dark" class="input-group-text">
              <font-awesome-icon icon="search" size="lg" />
            </b-button>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Search for Movies"
            v-model="searchData"
            @input="onSearch"
          />
        </div>
      </b-col>
      <b-col>
        <label class="padding-right">{{ Constant.LocationSearchLable }}</label>
        <b-form-select
          v-model="locationSelected"
          :options="locationList"
          @change="onChangeFields"
          class="w-35"
        ></b-form-select>
      </b-col>
      <b-col>
        <label class="padding-right">{{ Constant.LanguageSearchLable }}</label>
        <b-form-select
          v-model="languageSelected"
          :options="languageList"
          @change="onChangeFields"
          class="w-35"
        ></b-form-select>
      </b-col>
      <b-col>
        <b-button variant="outline-dark" @click="resetSearch">
          <font-awesome-icon icon="redo-alt" size="lg" />
          {{ Constant.ResetSearchButton }}
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col
        v-for="(movie, index) in movieList"
        :key="index"
        sm="6"
        md="4"
        lg="3"
        xs="12"
      >
        <router-link
          :to="{ name: 'moviedetails', params: { details: movie } }"
          class="no-text-decoration"
        >
          <b-card
            :title="movie.Title"
            :img-src="movie.Poster"
            img-alt="Image"
            img-top
            class="my-3 card-body-size"
          >
            <b-card-text>
              <h6>{{ movie.Language }}</h6>
              <h6>{{ movie.listingType }}</h6>
            </b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "MovieSearch",
  data() {
    return {
      movies: [],
      filtered: [],
      searchData: "",
      locationSelected: "",
      locationList: [],
      languageSelected: "",
      languageList: [],
    };
  },
  computed: {
    movieList() {
      return this.filtered.length > 0 ? this.filtered : this.movies;
    },
  },
  async created() {
    try {
      let response = await axios.get(this.UrlBuilder.getAllMovies);
      this.movies = response.data;
      let allLocationList = this.movies.map((m) => m.Location);
      this.locationList = [...new Set(allLocationList)];
      let allLanguageList = this.movies.map((m) => m.Language);
      this.languageList = [...new Set(allLanguageList)];
    } catch (ex) {
      console.error(ex);
    }
  },
  methods: {
    onChangeFields() {
      if (this.locationSelected && this.languageSelected) {
        this.filtered = this.movies.filter((movie) => {
          return (
            movie.Location == this.locationSelected &&
            movie.Language == this.languageSelected
          );
        });
      } else if (this.locationSelected) {
        this.filtered = this.movies.filter((movie) => {
          return movie.Location == this.locationSelected;
        });
      } else if (this.languageSelected) {
        this.filtered = this.movies.filter((movie) => {
          return movie.Language == this.languageSelected;
        });
      }
    },
    onSearch() {
      this.filtered = this.movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(
          this.searchData.toLowerCase()
        );
      });
    },
    resetSearch() {
      this.languageSelected = "";
      this.locationSelected = "";
      this.searchData = "";
      this.filtered = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body-size {
  max-width: 20rem;
  height: 40rem;
}
.padding-right {
  padding-right: 1rem;
}
</style>
