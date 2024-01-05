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
          :alt="contact.hero.alt"
          class="PictureElement__imgDefault"
          fetchpriority="high"
        /><noscript
          ><img
            src="https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmall.jpg/0c1cc21218.jpg"
            :alt="contact.hero.alt"
        /></noscript>
      </picture>
    </article>
    <article class="content">
      <h1>{{ contact.content.h1 }}</h1>
      <form id="form">
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" />
        <label for="mail">E-mail</label>
        <input type="mail" name="mail" id="mail" />
        <label for="demande">--Type de demande--</label>
        <select v-model="selectedOption" name="demande" id="demande">
          <option value=""></option>
          <option id="neuf" value="neuf">
            {{ contact.content.form.option1 }}
          </option>
          <option id="occasion" value="occasion">
            {{ contact.content.form.option2 }}
          </option>
          <option id="garage" value="garage">
            {{ contact.content.form.option3 }}
          </option>
          <option id="autre" value="autre">
            {{ contact.content.form.option4 }}
          </option>
        </select>
        <label v-if="selectedOption === 'autre'" for="subject">Objet</label>
        <input
          v-if="selectedOption === 'autre'"
          type="text"
          name="subject"
          id="subject"
          placeholder="Autres: "
        />
        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button>Envoyer</button>
      </form>
    </article>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import contact from "../variables/contact.config";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

@Options({
  data() {
    return {
      selectedOption: "",
      contact: contact,
    };
  },
  mounted() {
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
    gsap.from("form", {
      scrollTrigger: "form",
      opacity: 0,
      y: 300,
      duration: 1,
      ease: "slow",
    });
  },
})
export default class ContactView extends Vue {
  contact = contact;
  selectedOption!: string;
}
</script>

<style lang="scss" scoped>
@import "../assets/layouts/color";
main::-webkit-scrollbar {
  display: none;
}

main {
  font-family: "Oswald", sans-serif;
  max-width: 100%;
  overflow-x: hidden;
}
button {
  cursor: pointer;
  font-weight: bold;
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
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 40%;
    padding: 2em;
    height: 500px;
    @media screen and (max-width: 1400px) and (min-width: 1000px) {
      width: 60%;
    }
    @media screen and (max-width: 1000px) and (min-width: 500px) {
      width: 80%;
    }
    @media screen and (max-width: 500px) {
      width: 95%;
    }
    input,
    textarea,
    select {
      height: 15%;
      border: none;
      border-bottom: 1px solid $secondary;
      background-color: transparent;
      &:focus {
        outline: none;
        border-bottom-color: $primary;
      }
    }
    button {
      width: 40%;
      height: 15%;
      background-color: $primary;
      color: $secondary;
      border: none;
      border-radius: 0.33em;
      transition: all 0.15s ease-in-out;
    }
    button:hover {
      background-color: $secondary;
      color: $primary;
      border: none;
      border-bottom: 1px solid $secondary;
    }
  }
}
</style>
