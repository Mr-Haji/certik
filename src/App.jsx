import React from 'react'
import AppRouter from './Config/AppRouter/AppRouter'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <>
      
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App