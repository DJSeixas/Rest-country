<template>
<router-link to="/Details" class="nav">
  <div class="card">
        <div class="card__imagem"></div>
        <div class="card__content">
            <h3 class="card__content-title">{{ country.name }}</h3>
            <p class="card__content-details"><strong>Population:</strong> {{ country.population }}</p>
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
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped/>

