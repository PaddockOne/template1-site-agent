<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="vehicle in vehicleList" :key="vehicle.id">
      <div class="slide">
        <div class="slide__image">
          <img :src="vehicle.img" :alt="vehicle.name" />
        </div>
        <div class="slide__content">
          <h2>{{ vehicle.name }}</h2>
          <p>à partir de {{ vehicle.price }}€</p>
          <p v-if="vehicle.bonus" class="bonus">
            bonus éco de {{ vehicle.bonus }}€ non déduit
          </p>
          <button class="btn-primary">Contactez-nous</button>
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

export default {
  name: "CarouselVehicle",
  data() {
    return {
      vehicleList: [
        {
          id: 1,
          name: "TWIZY E-TECH 100% ELECTRIC",
          img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FTWZ%3Bck%3DVP%2Ftwizy-e-tech-electrique%2Fc%2FA-ENS_0MDL2P1SERIELIM3_-TEGNE",
          price: 11600,
          bonus: 900,
        },
        {
          id: 2,
          name: "TWINGO",
          img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2F2W3%2Ftwingo%2Fc%2FA-ENS_0MDL2P1SERIELIM2_-OVRPP",
          price: 15750,
        },
        {
          id: 3,
          name: "ZOE E-TECH 100% ELECTRIC",
          img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FZOE%3Bck%3DVP%2Fzoe-e-tech-electrique%2Fc%2FA-ENS_0MDL3P1SERIELIM3_-TERRE",
          price: 33700,
          bonus: 6000,
        },
        {
          id: 4,
          name: "CLIO",
          img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FCL5%3Bck%3DVP%2Fclio%2Fc%2FA-ENS_0MDL2PSP1SERIESPE1_-TERQH",
          price: 17100,
        },
        {
          id: 5,
          name: "CAPTUR",
          img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FCP1%2Fcaptur%2Fc%2FA-ENS_0MDL2PSP1SERIELIM2_-BIXPA",
          price: 23400,
        },
        {
          id: 6,
          name: "MEGANE E-TECH 100% ELECTRIC",
          img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FZO1%2Fmegane-e-tech-100-electrique%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-BIYWU",
          price: 37200,
          bonus: 6000,
        },
      ],
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
