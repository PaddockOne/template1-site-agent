<template>
  <main>
    <article class="hero">
      <picture>
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_desktop_2560x1440.jpg.ximg.largex2.webp/6aff01e99a.webp
          "
          media="(min-width: 1281px)"
          type="image/webp"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_desktop_2560x1440.jpg.ximg.large.webp/6aff01e99a.webp,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_desktop_2560x1440.jpg.ximg.largex2.webp/6aff01e99a.webp 2x
          "
          media="(min-width: 1024px)"
          type="image/webp"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_tablet_2560x1528.jpg.ximg.medium.webp/a028c435a5.webp,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_tablet_2560x1528.jpg.ximg.mediumx2.webp/a028c435a5.webp 2x
          "
          media="(min-width: 641px)"
          type="image/webp"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.small.webp/0c1cc21218.webp,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.smallx2.webp/0c1cc21218.webp 2x
          "
          media="(min-width: 376px)"
          type="image/webp"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmall.webp/0c1cc21218.webp,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmallx2.webp/0c1cc21218.webp 2x
          "
          type="image/webp"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_desktop_2560x1440.jpg.ximg.largex2.jpg/6aff01e99a.jpg
          "
          media="(min-width: 1281px)"
          type="image/jpeg"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_desktop_2560x1440.jpg.ximg.large.jpg/6aff01e99a.jpg,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_desktop_2560x1440.jpg.ximg.largex2.jpg/6aff01e99a.jpg 2x
          "
          media="(min-width: 1024px)"
          type="image/jpeg"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_tablet_2560x1528.jpg.ximg.medium.jpg/a028c435a5.jpg,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_tablet_2560x1528.jpg.ximg.mediumx2.jpg/a028c435a5.jpg 2x
          "
          media="(min-width: 641px)"
          type="image/jpeg"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.small.jpg/0c1cc21218.jpg,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.smallx2.jpg/0c1cc21218.jpg 2x
          "
          media="(min-width: 376px)"
          type="image/jpeg"
        />
        <source
          srcset="
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmall.jpg/0c1cc21218.jpg,
            https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmallx2.jpg/0c1cc21218.jpg 2x
          "
          type="image/jpeg"
        />
        <img
          :src="imgPrincipale"
          :alt="home.hero.picture.alt1"
          class="PictureElement__imgDefault"
          fetchpriority="high"
        /><noscript
          ><img alt="Nouveau SUV Austral E-Tech full hybrid"
        /></noscript>
      </picture>
      <span class="hero__text">
        <h3 class="hero__text--first">
          {{ data_home.premiere_partie_du_titre }}
        </h3>
        <span class="hero__text--second">
          <h1>{{ data_home.deuxieme_partie_du_titre }}</h1>
          <h1>{{ data_home.troisieme_partie_du_titre }}</h1>
        </span>
        <span class="hero__text--third">{{ data_home.sous_titre }}</span>
      </span>
      <section class="hero__modal">
        <img
          src="https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-2.png"
          class="attachment-large size-large"
          srcset="
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-2.png         350w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-2-300x180.png 300w
          "
          sizes="(max-width: 350px) 100vw, 350px"
        />
        <!-- <img :src="imgBanniere" alt="" class="attachment-large size-large" /> -->
        <span class="hero__modal__text">
          <section>
            <h3 class="hero__modal__text--italic">
              {{ data_home.titre_banniere_italique }}
            </h3>
            <h3 class="hero__modal__text--bold">
              {{ data_home.titre_banniere_gras }}
            </h3>
          </section>
          <span>{{ data_home.texte_banniere }}</span>
        </span>
        <button class="btn-primary">
          {{ data_home.texte_bouton_banniere }}
        </button>
      </section>
    </article>
    <article class="why-us">
      <section class="why-us__img">
        <img
          width="370"
          height="250"
          src="https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-3.jpg"
          class="attachment-large size-large why-us__img1"
          alt=""
          srcset="
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-3.jpg         370w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-3-300x203.jpg 300w
          "
          sizes="(max-width: 370px) 100vw, 370px"
        />
        <img
          width="420"
          height="300"
          src="https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-4.png"
          class="attachment-large size-large why-us__img2"
          alt=""
          srcset="
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-4.png         420w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-4-300x214.png 300w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-4-370x265.png 370w
          "
          sizes="(max-width: 420px) 100vw, 420px"
        />
      </section>
      <section class="why-us__text">
        <h2 class="why-us__text--title">
          {{ data_home.titre_encars_competence }}
        </h2>
        <section class="why-us__text--list">
          <span class="why-us__text--list__item left_top"
            ><span class="icon"></span>
            <span class="text">
              <h5>
                {{ first_competences.alternativeText }}
              </h5>
              <span>
                {{ first_competences.caption }}
              </span>
            </span>
          </span>
          <span class="why-us__text--list__item right_top"
            ><span class="icon"></span>
            <span class="text">
              <h5>
                {{ second_competences.alternativeText }}
              </h5>
              <span>
                {{ second_competences.caption }}
              </span>
            </span>
          </span>
          <span class="why-us__text--list__item left_bottom"
            ><span class="icon"></span>
            <span class="text">
              <h5>
                {{ third_competences.alternativeText }}
              </h5>
              <span>
                {{ third_competences.caption }}
              </span>
            </span>
          </span>
          <span class="why-us__text--list__item right_bottom"
            ><span class="icon"></span>
            <span class="text">
              <h5>
                {{ fourth_competences.alternativeText }}
              </h5>
              <span>
                {{ fourth_competences.caption }}
              </span>
            </span>
          </span>
        </section>
      </section>
    </article>
    <article class="special-offer">
      <h2 id="special_offer_h2">
        {{ data_home.titre_encars_offre_speciale }}
      </h2>
      <section class="special-offer__list">
        <img
          width="370"
          height="360"
          src="https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_1.jpg"
          class="attachment-large size-large special-offer-img1"
          alt=""
          srcset="
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_1.jpg         370w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_1-300x292.jpg 300w
          "
          sizes="(max-width: 370px) 100vw, 370px"
        />
        <img
          width="370"
          height="360"
          src="https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_2.jpg"
          class="attachment-large size-large special-offer-img2"
          alt=""
          srcset="
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_2.jpg         370w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_2-300x292.jpg 300w
          "
          sizes="(max-width: 370px) 100vw, 370px"
        />
        <img
          width="370"
          height="360"
          src="https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_3.jpg"
          class="attachment-large size-large special-offer-img3"
          alt=""
          srcset="
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_3.jpg         370w,
            https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon_banner_3-300x292.jpg 300w
          "
          sizes="(max-width: 370px) 100vw, 370px"
        />
      </section>
    </article>
    <article class="hero">
      <picture class="HeroModel__picture is-covered"
        ><source
          srcset="
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.xsmall.webp/9bd9376391.webp    375w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.small.webp/9bd9376391.webp     640w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.xsmallx2.webp/9bd9376391.webp  750w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.medium.webp/9bd9376391.webp   1024w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.large.webp/9bd9376391.webp    1280w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.mediumx2.webp/9bd9376391.webp 2048w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.largex2.webp/9bd9376391.webp  2560w
          "
          type="image/webp"
          sizes="100vw" />
        <source
          srcset="
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.xsmall.jpg/9bd9376391.jpg    375w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.small.jpg/9bd9376391.jpg     640w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.xsmallx2.jpg/9bd9376391.jpg  750w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.medium.jpg/9bd9376391.jpg   1024w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.large.jpg/9bd9376391.jpg    1280w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.mediumx2.jpg/9bd9376391.jpg 2048w,
            https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.largex2.jpg/9bd9376391.jpg  2560w
          "
          type="image/jpeg"
          sizes="100vw" />
        <img
          src="https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.xsmall.jpg/9bd9376391.jpg"
          :alt="home.hero_model.alt"
          class="PictureElement__imgDefault heroModel_img"
          fetchpriority="high" /><noscript
          ><img
            src="https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/clio/clio-bja-ph1-hev/hero-zone/2560x1200-desktop/renault-clio5-hev-ph1-hero-zone-desktop-001.jpg.ximg.xsmall.jpg/9bd9376391.jpg"
            :alt="home.hero_model.alt" /></noscript
      ></picture>
      <span class="hero__text bottom_minus">
        <h3 class="hero__text--first">
          {{ data_home.titre_deuxieme_banniere }}
        </h3>
        <span class="hero__text--second">
          <h1>{{ data_home.premier_texte_deuxieme_banniere }}</h1>
          <h1>{{ data_home.deuxieme_texte_deuxieme_banniere }}</h1>
        </span>
        <button class="btn-primary">
          {{ data_home.texte_bouton_deuxieme_banniere }}
        </button>
        >
      </span>
    </article>
    <article class="our_vehicle">
      <h2>Nos véhicules</h2>
      <CarouselVehicle />
      <section class="highlight">
        <div class="highlight__description">
          <span class="badge">{{ highlight.badge_carousel_site_agency }}</span>
          <h2 class="name">{{ highlight.title_carousel_site_agency }}</h2>
          <h4 class="price">
            prix à partir de {{ highlight.price_carousel_site_agency }} €
          </h4>
          <span
            v-if="highlight.aside_carousel_site_agency !== null"
            class="bonus"
            >bonus éco de {{ highlight.aside_carousel_site_agency }} € non
            déduit</span
          >
          <span
            class="energy-grade"
            :data="highlight.class_energy_carousel_site_agency"
          >
            Classe énergétique
          </span>
        </div>
        <picture
          class="LazyPictureElement LazyPictureElement_loaded WebrenderPictureElement RangeModelCard__image is-ratio-forced"
          ><source
            :srcset="
              highlight.photo_vehicles + '&output=webp&width=500&height=400'
            "
            media="(min-width: 1024px)" />
          <source :srcset="highlight.photo_vehicles" />
          <img
            src="https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FZO1%2Fmegane-e-tech-100-electrique%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-BIYWU"
            alt="MEGANE E-TECH 100% ELECTRIC"
            class="PictureElement__imgDefault" /><noscript
            ><img
              src="https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FZO1%2Fmegane-e-tech-100-electrique%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-BIYWU"
              alt="MEGANE E-TECH 100% ELECTRIC" /></noscript
        ></picture>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import home from "../variables/home.config";
import { Options, Vue } from "vue-class-component";
import CarouselVehicle from "@/components/Carousel.component.vue";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

@Options({
  components: {
    CarouselVehicle,
  },
  data() {
    return {
      home: home,
      highlight: [],
      data_home: "",
      link: "http://localhost:1338",
      imgPrincipale: "",
      imgBanniere: "",
      first_competences: "",
      first_icon_competences: "",
      second_competences: "",
      third_competences: "",
      fourth_competences: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:1338/api/page-principales/1?populate=*")
      .then((response) => {
        this.data_home = response.data.data.attributes;
        this.imgPrincipale =
          this.link + this.data_home.image_principale.data.attributes.url;
        this.imgBanniere =
          this.link + this.data_home.image_banniere.data.attributes.url;
        this.first_competences = this.data_home.competences.data[0].attributes;
        this.second_competences = this.data_home.competences.data[1].attributes;
        this.third_competences = this.data_home.competences.data[2].attributes;
        this.fourth_competences = this.data_home.competences.data[3].attributes;
        console.log("data_home", this.data_home);
        console.log(
          "data",
          this.data_home.competences.data[0].attributes.alternativeText
        );
        this.first_icon_competences =
          this.link + this.data_home.competences.data[0].attributes.url;
        console.log("first_icon_competences", this.first_icon_competences);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3500/carousel/get-current-ad")
      .then((response) => {
        this.highlight = response.data.data;
        this.highlight = this.highlight[0];
        console.log(
          "hilightVehicle",
          this.highlight.badge_carousel_site_agency
        );
      })
      .catch((error) => {
        console.log(error);
      });
    gsap.from(".hero", {
      scrollTrigger: ".hero",
      opacity: 0,
      x: 800,
      duration: 0.5,
    });
    gsap.from(".hero__modal", {
      scrollTrigger: ".hero__modal",
      opacity: 0,
      x: -1200,
      duration: 0.5,
    });
    gsap.from(".why-us__img1", {
      scrollTrigger: ".left_top",
      opacity: 0,
      duration: 0.5,
      x: -500,
      ease: "bounce",
    });
    gsap.from(".why-us__img2", {
      scrollTrigger: ".left_top",
      opacity: 0,
      duration: 1,
      x: -500,
      ease: "bounce",
    });
    gsap.from(".left_top", {
      scrollTrigger: ".left_top",
      opacity: 0,
      x: 1200,
      duration: 0.5,
      ease: "back",
    });
    gsap.from(".right_top", {
      scrollTrigger: ".left_top",
      opacity: 0,
      x: 1200,
      duration: 0.75,
      ease: "back",
    });
    gsap.from(".left_bottom", {
      scrollTrigger: ".left_top",
      opacity: 0,
      x: 1200,
      duration: 1,
      ease: "back",
    });
    gsap.from(".right_bottom", {
      scrollTrigger: ".right_top",
      opacity: 0,
      x: 1200,
      duration: 1.25,
      ease: "back",
    });
    gsap.from(".why-us__text--title", {
      scrollTrigger: ".why-us__text--title",
      opacity: 0,
      x: 1200,
      duration: 1.25,
      ease: "back",
    });
    gsap.from(".special-offer-img1", {
      scrollTrigger: "#special_offer_h2",
      opacity: 0,
      y: -500,
      duration: 0.5,
      ease: "slow",
    });
    gsap.from(".special-offer-img2", {
      scrollTrigger: "#special_offer_h2",
      opacity: 0,
      y: -500,
      duration: 0.75,
      ease: "slow",
    });
    gsap.from(".special-offer-img3", {
      scrollTrigger: "#special_offer_h2",
      opacity: 0,
      y: -500,
      duration: 1,
      ease: "slow",
    });
    gsap.from(".heroModel_img", {
      scrollTrigger: ".heroModel_img",
      opacity: 0,
      duration: 1,
    });
    gsap.from(".our_vehicle", {
      scrollTrigger: ".our_vehicle",
      opacity: 0,
      duration: 1.5,
    });
    gsap.from(".highlight", {
      scrollTrigger: ".our_vehicle",
      opacity: 0,
      duration: 1.5,
    });
  },
})
export default class HomeView extends Vue {
  highlight!: any;
  home = home;
  hilightVehicle: {
    id: number;
    name: string;
    img: string;
    price: number;
    bonus?: number;
    energyGrade: string;
  } = {
    id: 6,
    name: "MEGANE E-TECH 100% ELECTRIC",
    img: "https://www.renault.fr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ffr.co.rplug.renault.com%2Fproduct%2Fmodel%2FZO1%2Fmegane-e-tech-100-electrique%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-BIYWU",
    price: 37200,
    bonus: 6000,
    energyGrade: "A",
  };
  data_home: any;
  imgPrincipale!: string;
  imgBanniere!: string;
  first_competences!: any;
  first_icon_competences!: string;
  second_competences!: any;
  third_competences!: any;
  fourth_competences!: any;
}
</script>

<style lang="scss">
@import "../assets/layouts/color";
main::-webkit-scrollbar {
  display: none;
}

main {
  max-width: 100%;
  overflow-x: hidden;
}
.hero {
  width: 100%;
  height: 600px;
  position: relative;
  @media screen and (max-width: 600px) {
    height: 400px;
  }
  .bottom_minus {
    bottom: -1.5%;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 33%;
    background: rgb(0, 0, 0, 0.75);
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    @media screen and (min-width: 600px) and (max-width: 1024px) {
      width: 75%;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__text {
    position: absolute;
    bottom: 2.5%;
    left: 2.5%;
    &--first {
      font-family: "Oswald", sans-serif;
      color: $primary;
      font-weight: 600;
      font-size: 1.5rem;
      margin: 0;
      @media screen and (max-width: 600px) {
        font-size: 1em;
      }
    }
    &--second {
      display: flex;
      flex-direction: column;
      h1 {
        font-family: "Oswald", sans-serif;
        color: $background_primary;
        font-size: 2.5rem;
        margin: 0;
        line-height: 1em;
        @media screen and (max-width: 600px) {
          font-size: 1.75em;
        }
        &:nth-child(2) {
          font-style: italic;
        }
      }
    }
    &--third {
      display: block;
      font-family: "Dosis", sans-serif;
      color: rgb(172, 172, 172);
      font-size: 1rem;
      max-width: 50%;
      font-weight: 400;
      margin: 0;
      @media screen and (max-width: 600px) {
        font-size: 0.75em;
        max-width: 75%;
      }
    }
    button {
      margin-top: 1em;
      font-family: "Oswald", sans-serif;
      @media screen and (max-width: 600px) {
        margin-top: 0.5rem;
      }
    }
  }
  &__modal {
    width: 60%;
    height: 125px;
    position: absolute;
    bottom: -75px;
    left: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $background_primary;
    padding: 2em 3em;
    overflow: visible;
    border-radius: 0.25em;
    box-shadow: 0 0 0.5em 0.5em rgb(0, 0, 0, 0.25);
    @media screen and (max-width: 1200px) {
      width: 100%;
      bottom: -125px;
      left: 0;
      border-radius: 0;
      padding: 1em 2em;
      flex-direction: column;
      box-shadow: 0 0 0 0 rgb(0, 0, 0, 0);
      gap: 1em;
    }
    img {
      height: 175px;
      width: auto;
      position: relative;
      top: -25px;
      left: -7.5%;
      z-index: 10;
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
    &__text {
      position: relative;
      left: -12.5%;
      width: 50%;
      @media screen and (max-width: 1200px) {
        width: 100%;
        left: 0;
      }
      span {
        font-family: "Oswald", sans-serif;
      }
      section {
        display: flex;
        gap: 0.25em;
        font-size: 1.5rem;
        h3 {
          font-family: "Oswald", sans-serif;
          margin: 0;
          color: $secondary;
          white-space: nowrap;
        }
        .hero__modal__text--italic {
          font-style: italic;
          font-weight: 400;
        }
      }
    }
    button {
      height: 40px;
      width: 30%;
      font-family: "Oswald", sans-serif;
      white-space: nowrap;
      @media screen and (max-width: 1200px) {
        width: 75%;
      }
    }
  }
}
.why-us {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10em 10px 2em 10px;
  gap: 10em;
  background: $background_secondary;
  &__img {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    @media screen and (max-width: 1200px) {
      display: none;
    }
    img:nth-child(2) {
      position: absolute;
      bottom: -100%;
      right: -33%;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 40%;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-top: 2em;
    }
    h2 {
      font-family: "Oswald", sans-serif;
      color: $secondary;
      font-size: 2.5rem;
      font-weight: 500;
      padding: 0 0 1em 0;
      margin: 0;
      text-align: center;
      @media screen and (max-width: 600px) {
        font-size: 1.75em;
      }
    }
    &--list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      row-gap: 2em;
      &__item {
        max-width: 50%;
        width: auto;
        display: flex;
        align-items: center;
        gap: 1em;
        @media screen and (max-width: 768px) {
          max-width: 100%;
        }
        @media screen and (min-width: 768px) and (max-width: 1200px) {
          max-width: 45%;
        }
        &:nth-child(1) > .icon:before {
          content: url("https://api.iconify.design/mdi/tools.svg?color=%23162b40&width=40&height=40");
        }
        // &:nth-child(1) > .icon {
        //   background-image: v-bind("first_icon_competences");
        //   // content: url(first_icon_competences);
        //   // width: 40;
        //   // height: 40;
        // }
        &:nth-child(2) > .icon:before {
          content: url("https://api.iconify.design/raphael/employee.svg?color=%23162b40&width=40&height=40");
        }
        &:nth-child(3) > .icon:before {
          content: url("https://api.iconify.design/material-symbols/settings.svg?color=%23162b40&width=40&height=40");
        }
        &:nth-child(4) > .icon:before {
          content: url("https://api.iconify.design/ri/dashboard-3-fill.svg?color=%23162b40&width=40&height=40");
        }
        .icon {
          min-width: 75px;
          height: 65px;
          background-color: $primary;
          display: block;
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
          display: flex;
          transform: rotateZ(90deg);
          justify-content: center;
          align-items: center;
          &:before {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 65px;
            position: relative;
            top: 0;
            left: 0;
            transform: rotateZ(-90deg);
          }
        }
        .text {
          h5 {
            font-family: "Oswald", sans-serif;
            color: $secondary;
            font-size: 1.25rem;
            margin: 0;
          }
          span {
            font-family: "Dosis", sans-serif;
            color: #525252;
            font-size: 1rem;
          }
        }
      }
    }
  }
}
.special-offer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10em 10px 2em 10px;
  gap: 2em;
  @media screen and (max-width: 1200px) {
    padding: 2em 10px 2em 10px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1600px) {
    padding: 5em 10px 2em 10px;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    color: $secondary;
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 1.75em;
    }
  }
  &__list {
    display: flex;
    gap: 1em;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      img {
        width: 33%;
        height: 33%;
      }
    }
  }
}
.our_vehicle {
  width: 100%;
  background: $background_secondary;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2em 10px 2em 10px;
  h2 {
    font-family: "Oswald", sans-serif;
    color: $secondary;
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 1.75em;
    }
  }
  .highlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 5em;
    width: 55%;
    background: #f2f2f2;
    margin-top: 2em;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 2em 1em;
      flex-direction: column;
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 100%;
      padding: 2em 1em;
      flex-direction: row;
    }
    @media screen and (min-width: 1200px) and (max-width: 1600px) {
      width: 75%;
      padding: 2em 1em;
      flex-direction: row;
    }
    &__description {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1em;
      .badge {
        padding: 0.1em 0.5em;
        border: 1px solid #00abe5;
        border-radius: 5px;
        font-family: "Dosis", sans-serif;
        color: #00abe5;
        font-weight: 600;
      }
      .name {
        text-align: left !important;
      }
      .bonus {
        font-family: "Dosis", sans-serif;
        color: $background_primary;
        font-size: 1em;
        background: #72c293;
        padding: 0.1em 0.25em;
        border-radius: 5px;
      }
      .energy-grade {
        font-family: "Dosis", sans-serif;
        color: #000;
        font-size: 1em;
        font-weight: 800;
        padding: 0.1em 0.25em;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        &::after {
          content: attr(data);
          display: inline-block;
          width: 1em;
          height: 1em;
          padding: 0.1em 0.25em;
          background: #289548;
          color: $background_primary;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        }
      }
      h4 {
        font-family: "Oswald", sans-serif;
        color: $secondary;
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
        text-align: left;
        @media screen and (max-width: 600px) {
          font-size: 1.25em;
        }
      }
    }
  }
}
</style>
