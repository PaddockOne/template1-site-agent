<template>
  <footer>
    <section class="contact">
      <h2 id="contact_h2">Prenez rendez-vous maintenant</h2>
      <a id="contact_a" :href="'tel:' + nav.telephone" target="_blank"
        >Appellez nous au: {{ nav.telephone }}</a
      >
    </section>
    <section class="footer">
      <span class="general">
        <section class="brand">
          <h1 id="brand___first-part">
            {{ nav.nom_garage_premier_texte_gras }}
          </h1>
          <h1 id="brand___second-part">{{ nav.nom_garage_second_texte }}</h1>
        </section>
        <a :href="'tel:' + nav.telephone" target="_blank"
          >Appellez nous au: {{ nav.telephone }}</a
        >
        <span class="hours"
          ><h5>Horaires</h5>
          <p>{{ nav.horaires_semaine }}</p>
          <p>{{ nav.horaires_weekend }}</p></span
        >
        <span class="copyright">© 2022 TeamDevSyn</span>
      </span>
      <iframe
        class="svg"
        :src="link_GPS"
        width="800"
        height="300"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </footer>
</template>
<script lang="ts">
import header from "../variables/header.config";
import { Options, Vue } from "vue-class-component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
gsap.registerPlugin(ScrollTrigger);

@Options({
  name: "FooterComponent",
  data() {
    return {
      nav: "",
      link_GPS: "",
    };
  },
  mounted() {
    function extractCoordinatesAndZoomFromGoogleMapsLink(link: string) {
      const regex = /@(-?\d+\.\d+),(-?\d+\.\d+),(\d+)z/;
      const match = link.match(regex);

      if (match) {
        const latitude = parseFloat(match[1]);
        const longitude = parseFloat(match[2]);
        const zoom = parseInt(match[3], 10);

        return { latitude, longitude, zoom };
      } else {
        return null;
      }
    }
    axios
      .get("http://localhost:1338/api/navbars/1?populate=*")
      .then((response) => {
        this.nav = response.data.data.attributes;
        console.log("nav", this.nav);
        this.googleMapsLink = this.nav.localisation_GPS;
        const coordinatesAndZoom = extractCoordinatesAndZoomFromGoogleMapsLink(
          this.googleMapsLink
        );

        if (coordinatesAndZoom) {
          console.log("Latitude:", coordinatesAndZoom.latitude);
          console.log("Longitude:", coordinatesAndZoom.longitude);
          console.log("Zoom:", coordinatesAndZoom.zoom);
          this.link_GPS =
            "http://maps.google.com/maps?q=" +
            coordinatesAndZoom.latitude +
            "," +
            coordinatesAndZoom.longitude +
            "&z=" +
            coordinatesAndZoom.zoom +
            "&output=embed";
          this.location =
            coordinatesAndZoom.latitude +
            "," +
            coordinatesAndZoom.longitude +
            "," +
            coordinatesAndZoom.zoom;
        } else {
          console.log(
            "Le lien ne correspond pas au modèle d'URL attendu pour Google Maps."
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
    gsap.from(".general", {
      scrollTrigger: "footer",
      duration: 1,
      x: -300,
      opacity: 0,
    });
    gsap.from(".svg", {
      scrollTrigger: "footer",
      duration: 1,
      x: 300,
      opacity: 0,
    });
    gsap.from("#contact_h2", {
      scrollTrigger: "footer",
      duration: 1,
      x: -300,
      opacity: 0,
    });
    gsap.from("#contact_a", {
      scrollTrigger: "footer",
      duration: 1,
      x: 300,
      opacity: 0,
    });
  },
})
export default class Footer extends Vue {
  nav!: any;
  link_GPS!: string;
}
</script>

<style lang="scss" scoped>
@import "../assets/layouts/color";
footer::-webkit-scrollbar {
  display: none;
}

footer {
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  .contact {
    width: 100%;
    height: 75px;
    background: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    font-family: "Oswald", sans-serif;
    font-size: 1.25em;
    color: $secondary;
    @media screen and (max-width: 1200px) {
      font-size: 0.8em;
      gap: 1em;
      height: 125px;
      flex-direction: column;
    }
    h2 {
      margin: 0;
      font-weight: 400;
    }
    a {
      display: flex;
      font-size: 1.25em;
      color: $secondary;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      border-radius: 0.33em;
      transition: all 0.15s ease-in-out;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      &::before {
        content: url("https://api.iconify.design/bxs/phone.svg?color=%23162b40&width=40&height=40");
        display: block;
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
        position: relative;
        @media screen and (max-width: 1200px) {
          top: -0.5em;
          margin-right: 2em;
        }
      }
    }
  }
  .footer {
    width: 100%;
    background: $background_primary;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Oswald", sans-serif;
    font-size: 1.25em;
    color: $primary;
    padding: 2em 1em;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
    .general {
      width: 50%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 1em;
      padding: 1em 2em;
      @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 1em 1em;
        align-items: center;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 5px;
        height: 40px;
        border-left: 10px solid $primary;
        font-size: 1.5rem;
        color: #000;
        #brand___first-part,
        #brand___second-part {
          margin: 0;
          line-height: 30px;
        }
        #brand___first-part {
          font-weight: 800;
          padding-left: 0.5em;
        }
        #brand___second-part {
          font-weight: 400;
        }
      }
      a {
        display: flex;
        font-size: 1.25em;
        color: $secondary;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        border-radius: 0.33em;
        transition: all 0.15s ease-in-out;
        cursor: pointer;
        @media screen and (max-width: 1200px) {
          font-size: 0.8em;
        }
        &:hover {
          text-decoration: underline;
        }
        &::before {
          content: url("https://api.iconify.design/bxs/phone.svg?color=%23162b40&width=40&height=40");
          display: block;
          width: 1.5em;
          height: 1.5em;
          margin-right: 0.5em;
          position: relative;
          @media screen and (max-width: 1200px) {
            top: -0.5em;
            margin-right: 2em;
          }
        }
      }
      .hours {
        height: 30px;
        display: flex;
        align-items: center;
        gap: 0.25em;
        font-weight: 600;
        font-family: "Dosis", sans-serif;
        color: $secondary;
        font-size: 1em;
        @media screen and (max-width: 767px) {
          font-size: 0.75em;
          flex-direction: column;
          width: 100%;
          height: auto;
        }
        h5 {
          font-family: "Oswald", sans-serif;
          margin: 0;
          font-size: 1em;
        }
        @media screen and (max-width: 767px) {
          font-size: 0.8em;
        }
        &::before {
          content: url("https://api.iconify.design/tabler/clock-hour-3.svg?color=%23162b40&width=15&height=15'");
          position: relative;
          top: 0.15em;
        }
        p {
          margin: 0;
          position: relative;
          top: 0.05em;
        }
      }
      .copyright {
        font-weight: 400;
        font-family: "Dosis", sans-serif;
        color: $secondary;
        font-size: 0.75em;
        @media screen and (max-width: 767px) {
          text-align: center;
          width: 100%;
        }
      }
    }
    iframe {
      width: 600px;
      height: 300px;
      @media screen and (max-width: 767px) {
        width: 300px;
        height: 200px;
      }
    }
  }
}
</style>
