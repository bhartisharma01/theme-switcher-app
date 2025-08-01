import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect, useState } from 'react'

function App() {
  type Theme = "theme1" | "theme2" | "theme3";

  const [themeMode, setThemeMode] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "theme1";
  });


  const setTheme = (theme: Theme) => {
    setThemeMode(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.remove("theme1", "theme2", "theme3");
    html?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, setTheme }}>
        <div className="min-h-screen transition-colors duration-300 ease-in-out">
          <BrowserRouter>
            <Header />
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
