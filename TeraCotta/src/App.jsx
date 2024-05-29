import './App.css'
import Header from './components/header/Header'
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import WhyTerracotta from './components/WhyTerraCotta/WhyTerracotta'
import Products from './components/Product/Product2'
import Category from './components/Category/Category'
import ClientSay from './components/ClientSay/ClientSay'
import Story from './components/Story/Story'
import CompanyLogos from './components/CompanyLogos/CompanyLogos'
import WorldOldCarft from './components/WorldOldCraft/WorldOldCarft'
import TrendingProduct from './components/TrendingProduct/TrendingProduct'
import AllNewArrivals from './components/AllNewArrivals/AllNewArrivals'
import FactQuerys from './components/Faq\'s/FactQuerys'

function App() {


  return (
    <>
     <Header/>
      <Hero />
      <WhyTerracotta />
       <Products />
       <Category />
       <WorldOldCarft />
       <ClientSay />
       <Story />
       <TrendingProduct />
       <CompanyLogos />
       <AllNewArrivals />
       <FactQuerys />
     <Footer />
    </>
  )
}

export default App
