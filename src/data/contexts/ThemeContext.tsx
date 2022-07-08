import { createContext, useState } from 'react'

import { ThemeContextType, Theme } from './types'

const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  changeTheme: () => {},
})

interface ThemeProviderProps {
  children: any
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('')

  const changeTheme = function () {
    setTheme(theme === 'dark' ? '' : 'dark')
    document.querySelector('html')?.classList.toggle('dark')
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
