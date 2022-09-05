<template>
  <section class="search">
                <form action="#" class="search__form">
                    <button class="search__button">
                        <svg class="search__icon">
                            <use xlink:href="@/assets/images/sprite.svg#icon-search"></use>
                        </svg>
                    </button>
                    <input type="text" class="search__input" placeholder="Search for a country...">
                </form>

                <div class="select">
                    <button class="select__button" @click="toggle()">
                        <span class="select__text">Filter by Region</span>
                        <svg class="select__icon">
                            <use xlink:href="@/assets/images/sprite.svg#icon-chevron-small-down"></use>
                        </svg>
                    </button>
                    <ul class="select__options" 
                        :class="{active: selected}">
                        <li class="select__item">Africa</li>
                        <li class="select__item">America</li>
                        <li class="select__item">Asia</li>
                        <li class="select__item">Europe</li>
                        <li class="select__item">Oceania</li>
                    </ul>
                </div>

  </section>
</template>

<script>
export default {
    name: 'TheSearch',
    data(){
        return{
            selected: false
        }
    },
    methods:{
        toggle(){
            this.selected = !this.selected
        }
    }
}
</script>

<style src="@/sass/main.scss"  lang="scss" scoped/>

