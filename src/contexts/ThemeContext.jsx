import React, { createContext, useContext, useState, useEffect } from 'react'
import { Theme as CarbonTheme } from '@carbon/react'

const ThemeContext = createContext({
  theme: 'g100',
  toggleTheme: () => {},
  isDark: true,
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('saif_carbon_theme')
    return saved === 'white' ? 'white' : 'g100'
  })

  useEffect(() => {
    localStorage.setItem('saif_carbon_theme', theme)
    document.documentElement.setAttribute('data-carbon-theme', theme)
    if (theme === 'white') {
      document.documentElement.classList.add('cds--white')
      document.documentElement.classList.remove('cds--g100')
    } else {
      document.documentElement.classList.add('cds--g100')
      document.documentElement.classList.remove('cds--white')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'g100' ? 'white' : 'g100'))
  }

  const isDark = theme === 'g100'

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      <CarbonTheme theme={theme}>
        {children}
      </CarbonTheme>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
