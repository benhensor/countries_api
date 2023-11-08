import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Search = ({ setSearch }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <div className={`search-input ${theme}`}>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 16 }} className={`search-icon ${theme}`}/>
      <input 
        type="text" 
        placeholder="Search for a country..." 
        onChange={(e) => setSearch(e.target.value)} 
        onKeyDown={(e) => { 
          if (e.key === 'Enter') { 
            e.preventDefault();
            setSearch(e.target.value)
            console.log(e.target.value)
          }}}/>
    </div>
  )
}

export default Search