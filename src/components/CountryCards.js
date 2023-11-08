import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

const CountryCards = ({ countries }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <section className={`countries-container ${theme}`}>

      {countries.map((country, index) => (
        
      <div className='country-container' key={index}>
        <img src={country.flags.png} alt={country.name.common} />
        <h1>{country.name.common}</h1>
        <div className='country-details'>
          <p><span>Population: </span>{country.population}</p>
          <p><span>Region: </span>{country.region}</p>
          <p><span>Capital: </span>{country.capital && country.capital[0]}</p>
        </div>
      </div>
      ))}
    </section>
  )
}

export default CountryCards