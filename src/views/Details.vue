<template>
  <div>
    <TheHeader />
    <div class="content">
      <router-link class="content__link" to="/">&larr;<span  class="content__span">Back</span></router-link>
    </div>
    <div class="details">
      <div class="details__imagem">
        <img :src=" selectedCountry.flags.png " width="600" height="400" alt="flag">
      </div>
      <div class="details__info">
        <h1>{{ selectedCountry.name }}</h1>
        <ul class="details__info-lista">
          <li class="details__info-lista-item"><strong>Native Language:</strong>{{ selectedCountry.nativeName[0]['name'] }}</li>
          <li class="details__info-lista-item"><strong>Population:</strong>{{ formatPop }}</li>
          <li class="details__info-lista-item"><strong>Region:</strong>{{ selectedCountry.region }}</li>
          <li class="details__info-lista-item"><strong>Sub Region:</strong>{{ selectedCountry.subregion }}</li>
          <li class="details__info-lista-item"><strong>Capital:</strong>{{ selectedCountry.capital }}</li>
          <li class="details__info-lista-item"><strong>Top Level Domain:</strong>{{ selectedCountry.topLevelDomain[0] }}</li>
          <li class="details__info-lista-item"><strong>Currencies:</strong>{{ selectedCountry.currencies[0]['name'] }}</li>
          <li class="details__info-lista-item"><strong>Languages:</strong><p class="details__info-lista-item--language" v-for="language,index in selectedCountry.languages" :key="index">{{ language['name'] }}</p></li>
        </ul>
        <div class="details__info-border"><strong>Border Countries:</strong>
          <ul class="details__info-border-lista">
          <li class="details__info-border-lista-item" v-for="border,index in selectedCountry.borders" :key="index">{{ border }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'

import { mapState } from 'vuex'


export default {
  components: {
    TheHeader
},
  computed: { 
    ...mapState([
      'selectedCountry'
    ]),
        formatPop(){
            return this.selectedCountry.population.toLocaleString('pt-br')
        }
}
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>
