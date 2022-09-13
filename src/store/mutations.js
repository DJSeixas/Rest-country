import {
    GET_COUNTRIES,
    SELECT_COUNTRY,
    SET_LIST,
    SEARCH_LIST,
    SET_REGION,
    GET_REGION,
    DARK,
    SET_BACK
} from './mutations-types'

export default {
      [GET_COUNTRIES]: (state, { countries }) => {
        state.countries = countries
      },
      [SELECT_COUNTRY]: (state, { country }) =>  {
        state.selectedCountry = country
      },
      [SET_LIST]: (state, payload) => {
        state.filterList = payload
      },
      [SEARCH_LIST]: (state, payload) => {
        state.searchList = payload
      },
      [SET_REGION]: (state, payload) => {
        state.region = payload
      },
      [GET_REGION]: (state, { filterList }) => {
        state.filterList =  filterList
      },
      [DARK]: (state, payload) => {
        state.darkMode = payload
      },
      [SET_BACK]: (state) => {
        state.filterList = state.countries
      }
}