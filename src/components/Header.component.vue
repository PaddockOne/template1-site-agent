<template>
  <header>
    <section id="contact">
      <section id="location">
        <span
          ><h5>Adresse</h5>
          <a href="https://goo.gl/maps/ku4aFjh4oGNiS1xN8" target="_blank"
            >La Faurie, 05230 La Bâtie-Neuve</a
          ></span
        >
        <span
          ><h5>Horaires</h5>
          <p>lun-jeu: 7:00-12:30, 13:30-18:30</p>
          <p>sam: 09:00-12:00</p></span
        >
      </section>
      <section id="phone">
        <h5>Téléphone</h5>
        <a href="tel:0492503091" target="_blank">04 92 50 30 91</a>
      </section>
    </section>
    <nav>
      <section class="brand">
        <h1 id="brand___first-part">Garage</h1>
        <h1 id="brand___second-part">Brenier</h1>
      </section>
      <span
        id="burger-btn"
        :class="{ active: toggleNav }"
        @click="toggleNavMenu()"
        ><div class="bar"></div
      ></span>
      <ul @click="toggleNavMenu()" :class="{ show: toggleNav }">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/about">A propos</router-link></li>
        <li>
          <router-link to="/contact">
            <button class="btn-primary">Contactez-nous</button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
@Options({
  name: "Header",
  mounted() {
    gsap.from("header", {
      scrollTrigger: "header",
      opacity: 0,
      y: -100,
      duration: 1,
    });
  },
})
export default class Header extends Vue {
  toggleNav = false;

  toggleNavMenu() {
    this.toggleNav = !this.toggleNav;
  }
}
</script>
<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #fff;
  #contact {
    width: 75%;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      display: flex;
      width: 100%;
    }

    h5 {
      font-family: "Oswald", sans-serif;
      margin: 0;
      font-size: 1em;
    }
    a {
      color: #162b40;
      text-decoration: none;
      font-weight: 600;
      font-family: "Dosis", sans-serif;
      font-size: 1em;
      position: relative;
      top: 0.05em;
      @media screen and (min-width: 768px) and (max-width: 1200px) {
        font-size: 0.8em;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    #location,
    #phone {
      display: flex;
      height: 30px;
    }
    #location {
      justify-content: flex-start;
      gap: 1em;
      align-items: center;
      span {
        height: 30px;
        display: flex;
        align-items: center;
        gap: 0.25em;
        font-weight: 600;
        font-family: "Dosis", sans-serif;
        color: #162b40;
        font-size: 1em;
        @media screen and (min-width: 768px) and (max-width: 1200px) {
          font-size: 0.8em;
        }
        &:nth-child(1)::before {
          content: url("https://api.iconify.design/carbon/location-filled.svg?color=%23162b40&width=15&height=15'");
          position: relative;
          top: 0.15em;
        }
        &:nth-child(2)::before {
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
    }
    #phone {
      justify-content: flex-end;
      align-items: center;
      gap: 0.25em;
      &::before {
        content: url("https://api.iconify.design/carbon/phone-voice.svg?color=%23162b40&width=20&height=20");
        position: relative;
        top: 0.15em;
      }
    }
  }
  nav {
    width: 75%;
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Oswald", sans-serif;
    user-select: none;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 5px;
      height: 40px;
      border-left: 10px solid #fcf143;
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
    .show {
      @media screen and (max-width: 1200px) {
        left: 0 !important;
        transition: all 0.5s ease;
        background-color: #fff;
        height: calc(100vh - 60px);
      }
    }
    .active {
      .bar {
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      &::before {
        transform: translateY(8.5px) rotateZ(45deg);
        transition: transform 0.5s ease;
      }
      &::after {
        transform: translateY(-8.5px) rotateZ(-45deg);
        transition: transform 0.5s ease;
      }
    }
    #burger-btn {
      display: none;
      @media screen and (max-width: 768px) {
        width: 30px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .bar {
          width: 30px;
          height: 3px;
          background-color: #162b40;
          border-radius: 3px;
          transition: opacity 0.5s ease;
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          width: 30px;
          height: 3px;
          background-color: #162b40;
          border-radius: 3px;
          transition: transform 0.5s ease;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 30px;
          height: 3px;
          background-color: #162b40;
          border-radius: 3px;
          transition: transform 0.5s ease;
        }
      }
    }
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.75em;
      @media screen and (max-width: 768px) {
        position: fixed;
        flex-direction: column;
        width: 100%;
        top: 60px;
        padding: 0;
        margin: 0;
        left: 100%;
        transition: all 0.5s ease;
      }
      @media screen and (min-width: 768px) and (max-width: 1200px) {
        top: 90px;
      }
      li {
        font-family: "Dosis", sans-serif;
        font-size: 1.2rem;
        background-color: #fff;
        font-weight: 400;
        position: relative;
        cursor: pointer;
        a {
          text-decoration: none;
        }
        &:not(:last-child) {
          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fcf143;
            bottom: 0;
            left: 0;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
          }
          &:hover::before {
            transform: scaleX(1);
          }
          a {
            text-decoration: none;
            color: #162b40;
          }
        }
      }
    }
  }
}
</style>
