<template>
<router-link  to="/Details" class="nav">
  <div @click="$emit('select', country)"  class="card">
        <div class="card__imagem">
            <img :src=" country.flags.png " width="300" height="180" alt="flag">
        </div>
        <div class="card__content">
            <h3 class="card__content-title">{{ country.name }}</h3>
            <p class="card__content-details"><strong>Population:</strong> {{ formatPop }}</p>
            <p class="card__content-details"><strong>Region:</strong> {{ country.region }}</p>
            <p class="card__content-details"><strong>Capital:</strong>{{ country.capital }}</p>
        </div>
  </div>
  </router-link>
</template>

<script>
export default {
    name:'Card',
    props:{
        country: {
            type: Object,
            required: true
        },
        selectedCountry: {

        }
    },
    data(){
        return{

        }
    },
    computed: {
        formatPop(){
            return this.country.population.toLocaleString('pt-br')
        }
    }
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped/>

