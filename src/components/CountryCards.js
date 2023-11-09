import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

const CountryCards = ({ countries, setSelectedCountry, borders }) => {

  const { theme } = useContext(ThemeContext)

  function handleCountryClick(country) {
    setSelectedCountry(country)
    if (country.borders) {
    borders(country.borders)
    }
    console.log(country)
  }


  return (
    <section className={`countries-container ${theme}`}>

      {countries.map((country, index) => (
        
      <div className={`country-container ${theme}`} key={index} onClick={() => handleCountryClick(country)}>
        <img src={country.flags?.png} alt={country.name} />
        <h1>{country.name}</h1>
        <div className='country-details'>
          <p><span>Population: </span>{country.population}</p>
          <p><span>Region: </span>{country.region}</p>
          <p><span>Capital: </span>{country.capital}</p>
        </div>
      </div>
      ))}
    </section>
  )
}

export default CountryCards