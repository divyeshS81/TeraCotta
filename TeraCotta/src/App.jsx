import './App.css'
import Header from './components/header/Header'
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import WhyTerracotta from './components/WhyTerraCotta/WhyTerracotta'
import Products from './components/Product/Product2'
import Category from './components/Category/Category'
import ClientSay from './components/ClientSay/ClientSay'

function App() {


  return (
    <>
     <Header/>
      <Hero />
      <WhyTerracotta />
       <Products />
       <Category />
       <ClientSay />
     <Footer />
    </>
  )
}

export default App
