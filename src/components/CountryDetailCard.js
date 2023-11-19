import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CountryDetailCard = ({ setSearch, selectedCountry, setSelectedCountry, borderingCountries, setBorderingCountries, borderingCountryClick }) => {

  const { theme } = useContext(ThemeContext)

  function handleBackClick() {
    setSelectedCountry(null)
    setBorderingCountries([])
    setSearch('')
  }

  return (
    <div className={`detail-container ${theme}`}>
      <button className='back-button' onClick={handleBackClick}><FontAwesomeIcon icon={faArrowLeft} className={`back-icon ${theme}`}/>Back</button>
      <div className='detail-card'>
        <img src={selectedCountry.flags?.png} alt={selectedCountry.name} />
        <div className='detail-details'>
          <h1>{selectedCountry.name}</h1>
          <div className='detail-information'>
            <p><span>Native Name: </span>{selectedCountry.nativeName}</p>
            <p><span>Population: </span>{selectedCountry.population}</p>
            <p><span>Region: </span>{selectedCountry.region}</p>
            <p><span>Sub Region: </span>{selectedCountry.subregion}</p>
            <p><span>Capital: </span>{selectedCountry.capital}</p>
            <p><span>Top Level Domain: </span>{selectedCountry.topLevelDomain}</p>
            <p><span>Currencies: </span>{selectedCountry.currencies && selectedCountry.currencies[0].name}</p>
            <p><span>Languages: </span>{selectedCountry.languages && selectedCountry.languages.map(language => language.name).join(', ')}</p>
          </div>
          {borderingCountries && borderingCountries.length > 0 && (
            <div className='detail-borders'>
              <span>Bordering Countries: </span>
              <br/>
              <br/>
              {borderingCountries.map((country, index) => (
                <button key={index} onClick={() => borderingCountryClick(country)}>{country}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryDetailCard