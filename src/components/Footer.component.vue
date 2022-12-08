<template>
  <footer>
    <section class="contact">
      <h2>Prenez rendez-vous maintenant</h2>
      <a href="tel:0492503091" target="_blank"
        >Appellez nous au: 04 92 50 30 91</a
      >
    </section>
    <section class="footer">
      <span class="general">
        <section class="brand">
          <h1 id="brand___first-part">Garage</h1>
          <h1 id="brand___second-part">Brenier</h1>
        </section>
        <a href="tel:0492503091" target="_blank"
          >Appellez nous au: 04 92 50 30 91</a
        >
        <span class="hours"
          ><h5>Horaires</h5>
          <p>lun-jeu: 7:00-12:30, 13:30-18:30</p>
          <p>sam: 09:00-12:00</p></span
        >
        <span class="copyright">© 2022 TeamDevSyn</span>
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11369.175398940632!2d6.1811782!3d44.5705559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x182e9ba5197ef442!2sBrenier%20Automobiles%20-%20Renault%20Dacia%20La%20B%C3%A2tie%20neuve!5e0!3m2!1sfr!2sfr!4v1668079046323!5m2!1sfr!2sfr"
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
import { Options, Vue } from "vue-class-component";

@Options({
  name: "FooterComponent",
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  .contact {
    width: 100%;
    height: 75px;
    background: #fcf143;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3em;
    font-family: "Oswald", sans-serif;
    font-size: 1.25em;
    color: #162b40;
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
      color: #162b40;
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
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Oswald", sans-serif;
    font-size: 1.25em;
    color: #fcf143;
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
      a {
        display: flex;
        font-size: 1.25em;
        color: #162b40;
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
        color: #162b40;
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
        color: #162b40;
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
