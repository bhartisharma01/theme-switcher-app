import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Header} from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }
  const toggleTheme = ()=>{
    console.log("set toggle theme")
  }

  // actual theme change

  useEffect(() => {
    document.querySelector('html')?.classList.remove("light", "dark");
    document.querySelector('html')?.classList.add(themeMode);
  }, [themeMode])
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter> */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme, toggleTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Header />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Home />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
