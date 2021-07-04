<template>
  <b-container>
    <b-row class="py-4">
      <b-col sm="6" md="7" lg="8">
        <h2>
          <b>{{ $route.params.details.Title }}</b>
        </h2>
        <h6>{{ $route.params.details.listingType }}</h6>
      </b-col>
      <b-col>
        <h6>{{ Constant.ImdbText }}</h6>
        <span>
          <font-awesome-icon icon="star" size="lg" class="yellow-star" />&nbsp;
          <b>{{ $route.params.details.imdbRating }}/10</b>
        </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            v-for="(still, index) in $route.params.details.Stills"
            :key="index"
            :img-src="still"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row class="py-4">
      <b-col>
        <h3>
          <b>{{ Constant.PlotTitle }}</b>
        </h3>
        <p>{{ $route.params.details.Plot }}</p>
      </b-col>
    </b-row>
    <b-row class="mb-5">
      <b-col>
        <b-button variant="outline-dark" :to="{ name: 'moviesearch' }">{{
          Constant.Back
        }}</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MovieDetails",
  mounted() {
    console.log(this.$route.params.details);
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.yellow-star {
  color: goldenrod;
}
</style>