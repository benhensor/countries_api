import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons'



const ThemePicker = () => {
    
    const { theme, toggleTheme } = useContext(ThemeContext)

    const moon = theme === 'light' 
        ? <FontAwesomeIcon icon={faMoonSolid} style={{ fontSize: 16 }} />
        : <FontAwesomeIcon icon={faMoonRegular} style={{ fontSize: 16 }}/>

  return (
    <section className={`theme-picker ${theme}`}>
        <button onClick={toggleTheme}>
            <span>{moon}</span><span>{theme === 'light' ? 'Dark' : 'Light'}</span> <span>Mode</span>
        </button>
    </section>
  )
}

export default ThemePicker