<template>
  <div class="wrapper__footer">
    <div class="image-container">
      <img
        src="@/assets/logo/logo_full_white.svg"
        alt="logo with name of company"
        class="logo"
      />
    </div>
    <div class="socials">
      <!-- <a href=""><img src="@/assets/logo/linkedIn.svg" alt="linkedIn" /> </a> -->
      <a
        href="https://instagram.com/laddboxkillarna?utm_medium=copy_link"
        target="_blank"
      >
        <img src="@/assets/logo/instagram.svg" alt="instagram"
      /></a>
      <a
        href="https://www.facebook.com/Laddboxkillarna-101947058713590/"
        target="_blank"
        ><img src="@/assets/logo/facebook.svg" alt="facebook"
      /></a>
    </div>
    <div class="footer_text text__secondary">
      <p>&#169;Laddboxkillarna AB</p>
      <p>Org nr: 559311-4142</p>
      <a
        href="https://www.google.com/maps/place/L%C3%A5ng%C3%A4ngen+9,+417+22+G%C3%B6teborg/@57.7219141,11.9438371,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff54d1e128f07:0x725ddeba20a932ee!8m2!3d57.7219113!4d11.9460259"
        target="_blank"
        ><p>Långängen 9, 417 23 Göteborg</p>
        </a
      >

      <nuxt-link to="kontakt"> <p class="underline">Kontakt</p></nuxt-link>
      <nuxt-link to="policys"
        ><p class="underline">Integritetspolicy</p></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    fas() {
      return fas
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper__footer {
  padding: 1% 5%;
  color: white;
  display: grid;
  grid-template-areas:
    'img'
    'socials'
    'text';
  align-items: center;
  justify-items: center;
  box-shadow: 1px 0px 10px 1px #00000044;
  background-color: $black;

  .image-container {
    width: 35%;
    img {
      width: 100%;
      height: auto;
      shape-rendering: geometricPrecision;
    }
  }

  .socials {
    display: flex;

    img {
      width: 3rem;
      height: 3rem;
      margin: 1rem;
      shape-rendering: crispEdges;
    }
  }
  .footer_text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    a {
      text-decoration: none;
      color: $white;
      cursor: pointer;
    }
    p {
      padding: 0 1rem;
    }
    .underline {
      text-decoration: underline;
    }
  }
}
@media only screen and (max-width: 950px) {
  .wrapper__footer {
    padding: 5%;
    .footer_text {
      p {
        padding: 0 0.5rem;
      }
    }
    .image-container {
      width: 50%;
    }
  }
}
</style>
