import Navbar from './components/Header/Navbar'
import Hero from './components/Header/Hero'
import Steps from './components/Steps/Steps'
import BestSellers from './components/BestSellers/BestSellers'
import HotProducts from './components/HotProducts/HotProducts'
import CTA from './components/CTA/CTA'
import Collections from './components/Collections/Collections'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <BestSellers />
      <HotProducts />
      <CTA />
      <Collections />
      <Blog />
    </>
  )
}
export default App
