import React from "react"
import Header from "../components/sections/header/Header";
import Footer from "../components/sections/footer/Footer";

const MainLayout: React.FC<{ children: React.ReactNode, darkMode: boolean, setDarkMode: (value: boolean) => void }> = ({ children, darkMode, setDarkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl min-h-screen mx-auto px-6 py-8">{children}</main>
      <Footer darkMode={darkMode} />
    </>
  )
}

export default MainLayout
