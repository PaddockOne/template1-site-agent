<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="vehicle in vehicles" :key="vehicle.id_carousel_site_agency">
      <div class="slide">
        <div class="slide__image">
          <img
            :src="vehicle.photo_vehicles"
            :alt="vehicle.title_carousel_site_agency"
          />
        </div>
        <div class="slide__content">
          <h2>{{ vehicle.title_carousel_site_agency }}</h2>
          <p>à partir de {{ vehicle.price_carousel_site_agency }}€</p>
          <p v-if="vehicle.aside_carousel_site_agency" class="bonus">
            bonus éco de {{ vehicle.aside_carousel_site_agency }}€ non déduit
          </p>
          <!-- <button class="btn-primary">Contactez-nous</button> -->
          <RouterLink
            style="text-decoration: none"
            id="contact"
            @click="toggleMenu()"
            :to="{
              name: 'contact',
              params: { promotion: 'vn', id_vehicles: vehicle.id_vehicles },
            }"
            href="/contact"
          >
            <button class="btn-primary" style="display: none">
              Contactez-nous
            </button>
            <button class="btn-primary" style="display: inline">
              Contactez-nous
            </button>
          </RouterLink>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { Vue } from "vue-class-component";
import axios from "axios";

export default {
  name: "CarouselVehicle",
  data() {
    return {
      vehicles: [],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        768: {
          itemsToShow: 2,
          snapAlign: "start",
        },
        1280: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  mounted() {
    axios
      .get("http://localhost:3500/carousel/get-carousel")
      .then((response) => {
        this.vehicles = response.data.data;
        console.log(this.vehicles);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  width: 55%;
  @media (max-width: 1200px) {
    width: 100%;
  }
}
.slide {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 1rem;
  border-radius: 0.25em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  .slide__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .slide__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 150px;
    gap: 0.5em;
    font-family: "Dosis", sans-serif;
    color: #525252;
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
    }
    p {
      font-size: 1.25em;
      font-weight: 600;
      margin: 0;
    }
    .bonus {
      font-size: 0.8em;
      font-weight: 400;
    }
  }
}
.carousel__pagination {
  padding: 0;
}
</style>
