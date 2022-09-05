<template>
  <div>
    <TheHeader />
    <div class="content">
      <router-link class="content__link" to="/">&larr;<span  class="content__span">Back</span></router-link>
    </div>
    <div class="details">
      <div class="details__imagem">
      </div>
      <div class="details__info">
        <h1>Brazil</h1>
        <ul class="details__info-lista">
          <li class="details__info-lista-item"><strong>Native Language:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Population:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Region:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Sub Region:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Capital:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Top Level Domain:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Currencies:</strong>Portugues</li>
          <li class="details__info-lista-item"><strong>Languages:</strong>Portugues</li>
        </ul>
        <div class="details__info-border"><strong>Border Countries:</strong>
          <ul class="details__info-border-lista">
          <li class="details__info-border-lista-item">Argentina</li>
          <li class="details__info-border-lista-item">Uruguai</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'


export default {
  components: {
    TheHeader
}
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>
