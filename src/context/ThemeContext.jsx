import { useState, useEffect, createContext } from 'react'

const defaultValue = {
    currentTheme: 'light',
    changeCurrentTheme: (newTheme) => {},
}
  
const ThemeContext = createContext(defaultValue)
  
const ThemeContextWrapper = ({ children }) => {
  const persistedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(persistedTheme || 'light')

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper