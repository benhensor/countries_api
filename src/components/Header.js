import React, { useContext } from 'react'
import ThemePicker from './ThemePicker'
import ThemeContext from '../ThemeContext'

const Header = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <header className={`header ${theme}`}>
        <h1>Where in the world?</h1>
        <ThemePicker />
    </header>
  )
}

export default Header