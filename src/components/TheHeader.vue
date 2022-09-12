<template>
  <section class="header" :class="{dark: darkMode}">

    <h1 class="header__title" :class="{dark: darkMode}" >Where in the world?</h1>

    <div class="header__text" :class="{dark: darkMode}">
      <button class="header__button" @click="dark()" :class="{dark: darkMode}">
        <svg class="header__icon" :class="{dark: darkMode}" v-if="darkMode">
           <use xlink:href="@/assets/images/sprite.svg#icon-light-up"></use>
         </svg>
        <svg class="header__icon" :class="{dark: darkMode}" v-else>
           <use xlink:href="@/assets/images/sprite.svg#icon-moon"></use>
         </svg>
      </button>
      Dark mode
      </div>

  </section>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'TheHeader',
  data(){
    return{
    }
  },
  computed: {
    ...mapState([
      'darkMode'
    ])
  },  
  methods: {
    dark(){
      this.$store.commit('dark', !this.darkMode)
    }
  }
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped/>

