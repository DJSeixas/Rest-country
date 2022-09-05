import Vue from 'vue'
import Vuex from 'vuex'
import services from '@/services/services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    selectedCountry: undefined  
  },
  mutations: {
    getCountries: (state, { countries }) => {
      state.countries = countries
    },
    selectCountry: (state, { country }) =>  {
      state.selectedCountry = country
    }
  },
  actions: {
     getCountries: async({ commit }) => {
      const response = await services.getCountries()
      commit('getCountries', { countries: response.data })
     },
     selectCountry: ({commit}, payload)=> {
      commit('selectCountry', payload)
     }
  },
  modules: {

  }
})
