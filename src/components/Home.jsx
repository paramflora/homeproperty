import Hero from './child/Hero'
import Property from './child/Property'
import Features from './child/Features'
import WhyChoose from './child/WhyChoose'
import UserGuide from './child/UserGuide'
import Footer from './Footer'

const Home = () => {

  return (
    <>
      <Hero/>
      <Property/>
      <WhyChoose/>
      <Features/>
      <UserGuide/>
      <Footer/>
    </>
  )
}

export default Home