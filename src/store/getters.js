export default {
    filterList: state => {
        if(!state.filterList.length && state.searchList === ''){
          return state.countries
        }else if(state.filterList.length && state.searchList !== ''){
          return state.filterList
        }else if(state.searchList === ''){
          return state.filterList
        }
      }
}