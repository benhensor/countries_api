import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = ({ setSearch }) => {

  const { theme } = useContext(ThemeContext)

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setSearch(e.target.value)
    }
  }

  return (
    <div className={`search-input ${theme}`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 16 }} className={`search-icon ${theme}`}/>
      <input 
        type="text" 
        placeholder="Search for a country..." 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default Search