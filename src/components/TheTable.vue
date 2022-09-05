<template>
    <ul class="table">
        <li class="table__item">
            <Card v-for="country,index in countries"
            :key="index"
            :country="country"
            />
        </li>
    </ul>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'TheTable',
    components: {
    Card,
},
data(){
    return{
        countries: [
            {
                name: 'Brazil',
                population: '206.135.893',
                region: 'Americas',
                Capital: 'Brasilia'
            },
            {
                name: 'Brazil',
                population: '206.135.893',
                region: 'Americas',
                Capital: 'Brasilia'
            },
            {
                name: 'Brazil',
                population: '206.135.893',
                region: 'Americas',
                Capital: 'Brasilia'
            },
            {
                name: 'Brazil',
                population: '206.135.893',
                region: 'Americas',
                Capital: 'Brasilia'
            },
            {
                name: 'Brazil',
                population: '206.135.893',
                region: 'Americas',
                Capital: 'Brasilia'
            },
            {
                name: 'Brazil',
                population: '206.135.893',
                region: 'Americas',
                Capital: 'Brasilia'
            }
        ]
    }
}
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped/>

