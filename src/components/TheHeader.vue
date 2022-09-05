<template>
  <section class="header">

    <h1 class="header__title">Where in the world?</h1>

    <div class="header__text">
      <button class="header__button">
        <svg class="header__icon">
           <use xlink:href="@/assets/images/sprite.svg#icon-moon"></use>
         </svg>
      </button>
      Dark mode
      </div>

  </section>
  
</template>

<script>
export default {
  name:'TheHeader'
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped/>

