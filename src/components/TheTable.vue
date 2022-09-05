<template>
    <ul class="table">
        <li class="table__item">
            <Card v-for="country,index in countries" :key="index"
            :country="country"
            @select="select"
            :selectedCountry="country"
            />
        </li>
    </ul>
</template>

<script>
import Card from './Card.vue';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'TheTable',
    components: {
    Card,
},
    data(){
        return{
    }
},
    computed: {
    ...mapState([
        'countries',
        'selectedCountry'
    ])
},
created(){
    this.getCountries()
},
    methods: {
        ...mapActions([
            'getCountries',
            'selectCountry'
        ]),
        select(country){
            this.selectCountry({ country })
        }
    },
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped/>

