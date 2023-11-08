import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import CountryCards from './components/CountryCards'
import CountryDetailCard from './components/CountryDetailCard'

function App() {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    fetchCountries()
  }
  , [])


  async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      if (!response.ok) {
        throw new Error('HTTP Error! status: ' + response.status)
      }
      const countries = await response.json()
      setCountries(countries)
    } catch (error) {
      console.log('Error fetching countries', error)
    }
  }
  
  

  return (
      <main className="app">
        <Header />
        <section className={`controls ${theme}`}>
          <Search setSearch={setSearch}/>
          <Filter setFilter={setFilter}/>
        </section>
        
        <CountryCards countries={countries}/>
        {selectedCountry && <CountryDetailCard country={selectedCountry}/>}
      </main>
  );
}

export default App
