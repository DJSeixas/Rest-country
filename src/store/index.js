import Vue from 'vue'
import Vuex from 'vuex'
import services from '@/services/services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    selectedCountry: undefined,
    filterList: [],
    searchList: '',
    filterBy: ''  
  },

  getters: {
    filterList: state => {
      if(!state.filterList.length && state.searchList === ''){
        return state.countries
      }else if(state.filterList.length && state.searchList !== ''){
        return state.filterList
      }else if(state.searchList === ''){
        return state.filterList
      }
    }
  },

  mutations: {
    getCountries: (state, { countries }) => {
      state.countries = countries
    },
    selectCountry: (state, { country }) =>  {
      state.selectedCountry = country
    },
    setList: (state, payload) => {
      state.filterList = payload
    },
    setSearchList: (state, payload) => {
      state.searchList = payload
    }
  },

  actions: {
     getCountries: async({ commit }) => {
      const response = await services.getCountries()
      commit('getCountries', { countries: response.data })
     },
     selectCountry: ({commit}, payload)=> {
      commit('selectCountry', payload)
     },
     updateList: ({commit, state}, input) => {
      let cs = state.countries.filter(country => {
        return country.name.toLowerCase().includes(input)
      })
      commit("setList", cs)
     },
     /* filterBy: ({commit}, { value, region }){

     } */
  },

  modules: {

  }
})
