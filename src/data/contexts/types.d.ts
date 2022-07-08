export type Theme = 'dark' | ''

export interface ThemeContextType {
  theme: Theme
  changeTheme: () => void
}
