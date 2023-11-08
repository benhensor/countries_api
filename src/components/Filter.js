import React, { useState, useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Filter = () => {

  const { theme } = useContext(ThemeContext)
  const [selected, setSelected] = useState('Filter by Region')
  const [filterClicked, setFilterClicked] = useState(false)

  const handleFilterClick = () => {
    setFilterClicked(prevState => ! prevState)
  }

  const handleOptionSelect = (region) => {
    setSelected(region)
    setFilterClicked(!filterClicked)
  }

  return (
    <div className={`filter ${theme}`}>
      <button className='filter-select' onClick={handleFilterClick}>
        {selected}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {filterClicked && (
        <div className={`filter-options ${theme}`}>
          <button onClick={() => handleOptionSelect('Africa')}>Africa</button>
          <button onClick={() => handleOptionSelect('America')}>America</button>
          <button onClick={() => handleOptionSelect('Asia')}>Asia</button>
          <button onClick={() => handleOptionSelect('Europe')}>Europe</button>
          <button onClick={() => handleOptionSelect('Oceania')}>Oceania</button>
        </div>
      )}
    </div>
  )
}

export default Filter