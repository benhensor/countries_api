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
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [borderingCountries, setBorderingCountries] = useState([])

  const { theme } = useContext(ThemeContext)

  // Using the API
  // useEffect(() => {
  //   fetchCountries()
  // }
  // , [])


  // async function fetchCountries() {
  //   try {
  //     const response = await fetch('https://restcountries.com/v3.1/all')
  //     if (!response.ok) {
  //       throw new Error('HTTP Error! status: ' + response.status)
  //     }
  //     const countries = await response.json()
  //     setCountries(countries)
  //   } catch (error) {
  //     console.log('Error fetching countries', error)
  //   }
  // }

  // // search
  // useEffect(() => {
  //   let filtered = countries;

  //   if (search) {
  //     filtered = filtered.filter(country => 
  //       country.name.common.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }

  //   if (filter) {
  //     filtered = filtered.filter(country =>
  //       country.region.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   }

  //   setFilteredCountries(filtered);
  // }, [search, filter, countries]);
  
  // Using the data.json file
  const data = require('./data.json')
  
  useEffect(() => {
    setCountries(data)
  }, [data])

  useEffect(() => {
    let filtered = countries;

    if (search) {
      filtered = filtered.filter(country => 
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter) {
      filtered = filtered.filter(country =>
        country.region.toLowerCase().includes(filter.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  }, [search, filter, countries])

  function borders(borders) {
    let borderingCountries = []

    borders.forEach(border => {
      countries.forEach(c => {
        if (border === c.alpha3Code) {
          borderingCountries.push(c.name)
        }
      })
    })
    setBorderingCountries(borderingCountries)
  }

  function borderingCountryClick(countryName) {
    const country = countries.find(c => c.name === countryName)
    setSelectedCountry(country)
  }



  return (
      <main className={`app ${theme}`}>
        <Header />
        
        {selectedCountry === null ? (
          <>
            <section className={`controls ${theme}`}>
              <Search setSearch={setSearch}/>
              <Filter setFilter={setFilter}/>
            </section>
            <CountryCards countries={filteredCountries} setSelectedCountry={setSelectedCountry} borders={borders}/>
          </>
        ) : (
          <CountryDetailCard 
            selectedCountry={selectedCountry} 
            setSelectedCountry={setSelectedCountry} 
            borderingCountries={borderingCountries} 
            setBorderingCountries={setBorderingCountries} 
            borderingCountryClick={borderingCountryClick}
          />
        )}
        
      </main>
  );
}

export default App
