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
          src="https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmall.jpg/0c1cc21218.jpg"
          class="PictureElement__imgDefault"
          fetchpriority="high"
        /><noscript
          ><img
            src="https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmall.jpg/0c1cc21218.jpg"
            :alt=""
        /></noscript>
      </picture>
    </article>
    <article class="content">
      <h1>{{ about.titre }}</h1>
      <p id="content_p1">{{ about.premier_texte }}</p>
      <p id="content_p2">{{ about.deuxieme_texte }}</p>
    </article>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import about from "../variables/about.config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
gsap.registerPlugin(ScrollTrigger);

@Options({
  data() {
    return {
      // about: about,
      about: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:1338/api/page-a-propos/1?populate=*")
      .then((response) => {
        this.about = response.data.data.attributes;
        console.log(this.about);
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
    gsap.from("h1", {
      scrollTrigger: "h1",
      opacity: 0,
      duration: 0.5,
    });
    gsap.from("#content_p1", {
      scrollTrigger: "#content_p1",
      opacity: 0,
      duration: 0.5,
      ease: "back",
      x: 500,
    });
    gsap.from("#content_p2", {
      scrollTrigger: "#content_p2",
      opacity: 0,
      duration: 0.5,
      ease: "back",
      x: -500,
    });
  },
})
export default class AboutView extends Vue {
  // about = about;
  about!: any;
}
</script>

<style lang="scss" scoped>
@import "../assets/layouts/color";
main::-webkit-scrollbar {
  display: none;
}
.hero::before {
  display: none;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background: url("https://ld-wp.template-help.com/wordpress_prod-18890/v2/wp-content/uploads/2018/06/fuelcon-5.jpg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 90px);
  h1 {
    font-size: 3em;
    font-family: "Oswald", sans-serif;
    color: $secondary;
  }
  p {
    font-size: 1em;
    font-family: "Open Sans", sans-serif;
    color: $secondary;
    align-self: flex-start;
    width: 50%;
    position: relative;
    left: 15%;
    @media screen and (max-width: 1200px) {
      width: 80%;
    }
  }
}
</style>
