import * as types from './mutations-types'
import services from '@/services/services'

export default {
    getCountries: async({ commit }) => {
        const response = await services.getCountries()
        commit(types.GET_COUNTRIES, { countries: response.data })
       },
       selectCountry: ({commit}, payload)=> {
        commit(types.SELECT_COUNTRY, payload)
       },
       updateList: ({commit, state}, input) => {
        let cs = state.countries.filter(country => {
          return country.name.toLowerCase().includes(input)
        })
        commit(types.SET_LIST, cs)
       },
       filterBy: async ({commit, state}) => {
        const response = await services.filterRegion(state.region.toLocaleLowerCase())
        commit(types.GET_REGION, { filterList: response.data })
       }
}