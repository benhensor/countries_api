import axios from 'axios'

let countries = []

export async function fetchCountries() {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v3.1/all')
      countries = response.data
      console.log(countries)
      return countries
    } catch (error) {
      console.log('Error fetching countries', error)
    }
  }

export default fetchCountries
// destructure the countries array into props for use in the app 
