<template>
  <Header />
  <router-view />
  <FooterComponent />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterView } from "vue-router";
import Header from "@/components/Header.component.vue";
import FooterComponent from "@/components/Footer.component.vue";

@Options({
  name: "App",
  components: {
    Header,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "../src/assets/layouts/color";
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Oswald:wght@200;300;400;500;600;700&display=swap");
.btn-primary {
  all: unset;
  padding: 0.25em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $primary;
  color: $secondary;
  font-weight: 600;
  border-radius: 0.33em;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background: $secondary;
    color: $primary;
  }
}
main {
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
