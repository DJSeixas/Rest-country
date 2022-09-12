<template>
  <section class="search" :class="{darkBg: darkMode}">
                <form action="#" class="search__form">
                    <button class="search__button" :class="{dark: darkMode}">
                        <svg class="search__icon">
                            <use xlink:href="@/assets/images/sprite.svg#icon-search"></use>
                        </svg>
                    </button>
                    <input type="text" 
                           class="search__input" 
                           placeholder="Search for a country..."
                           v-model="input"
                           @input="search()"
                           :class="{dark: darkMode}"
                           >
                </form>

                <div class="select">
                    <button class="select__button" @click="toggle()" :class="{dark: darkMode}">
                        <span class="select__text">{{ this.region }}</span>
                        <svg class="select__icon">
                            <use xlink:href="@/assets/images/sprite.svg#icon-chevron-small-down"></use>
                        </svg>
                    </button>
                    <ul class="select__options" 
                        :class="{active: selected, dark: darkMode}" >
                        <li 
                        class="select__item" 
                        v-for="reg, id in options"
                        :key="id"
                        @click="setText(reg.region)">{{ reg.region }}                        
                    </li>
                    </ul>
                </div>

  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'TheSearch',
    data(){
        return{
            selected: false,
            text: 'Filter by Region',
            input: '',
            options: [
                { id: 1, region: 'Africa', value: false },
                { id: 2, region: 'Americas', value: false },
                { id: 3, region: 'Asia', value: false },
                { id: 4, region: 'Europe', value: false },
                { id: 5, region: 'Oceania', value: false },
            ]
        }
    },
    computed: {
        ...mapState([
            'region',
            'countries',
            'searchList',
            'filterList',
            'darkMode'
        ])
    },
    methods:{
        ...mapActions([
            'filterBy',
        ]),
        toggle(){
            this.selected = !this.selected 
            console.log(this.region, this.countries)
            return this.$store.commit('setRegion', 'Filter By Region')
        },
        search(){
            this.$store.dispatch('updateList', this.input)
            this.$store.commit('setSearchList', this.input)
        },
        setText(value){
            this.text = value
            this.selected = !this.selected
            this.$store.commit('setRegion', value)
            this.filterBy()
            return console.log(this.text)
        }
    }
}
</script>

<style src="@/sass/main.scss"  lang="scss" scoped/>

