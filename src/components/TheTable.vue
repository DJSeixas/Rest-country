<template>
    <ul class="table" :class="{darkBg: darkMode}">
        <li class="table__item">
            <Card v-for="country,index in filterList" :key="index"
            :country="country"
            @select="select"
            :selectedCountry="country"
            />
        </li>
    </ul>
</template>

<script>
import Card from './Card.vue';

import { mapState, mapActions, mapGetters } from 'vuex';

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
        'selectedCountry',
        'darkMode'
    ]),
    ...mapGetters([
        'filterList'
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

