import axios from 'axios'

const apiCLient = axios.create({
    baseURL: 'https://restcountries.com/v2',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default{
    getCountries(){
        return apiCLient.get('/all')
    },
    filterRegion(region){
        return apiCLient.get(`/region/${region}`)
    }
}