import { React, createContext , useContext, useEffect, useState} from "react"

const ThemeContext = createContext()

export const useTheme =  () => useContext(ThemeContext)

export const Themeprovider = ({children}) => {
    const [theme , setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    )
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    },[theme])

    function toggleTheme(){
        // console.log('toggleTheme')
      return  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }
  
    // toggleTheme = () => {
    //     console.log('toggleTheme')
    //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark ' : 'light'))
    // }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
              {children}
        </ThemeContext.Provider>
    )
}
