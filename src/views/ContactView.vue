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
          alt="Nouveau SUV Austral E-Tech full hybrid"
          class="PictureElement__imgDefault"
          fetchpriority="high"
        /><noscript
          ><img
            src="https://cdn.group.renault.com/ren/fr/home/austral/austral_carrousel_mobile_2560x4551.jpg.ximg.xsmall.jpg/0c1cc21218.jpg"
            alt="Nouveau SUV Austral E-Tech full hybrid"
        /></noscript>
      </picture>
    </article>
    <article class="content">
      <h1>Contacter nous</h1>
      <form>
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" />
        <label for="mail">E-mail</label>
        <input type="mail" name="mail" id="mail" />
        <label for="subject">Objet</label>
        <input type="text" name="subject" id="subject" />
        <label for="message">Objet</label>
        <textarea name="message" id="message"></textarea>
      </form>
    </article>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
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
    color: #162b40;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }
}
</style>
