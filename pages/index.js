import { BigNFTSlider, HeroSection, ServicesSection, Subscribe } from '@/components/componentsindex'
import { CgLastpass } from 'react-icons/cg'


const Home = () => {
  return (
    <>
``<div className="space-y-12 my-32">
  <HeroSection/>
  <ServicesSection/>
  <BigNFTSlider/>
  <Subscribe/>
  </div>
    </>
  )
}

export default Home