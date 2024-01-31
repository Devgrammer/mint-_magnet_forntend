import { BigNFTSlider, HeroSection, ServicesSection } from '@/components/componentsindex'
import { CgLastpass } from 'react-icons/cg'


const Home = () => {
  return (
    <div className="space-y-32 my-32">
  <HeroSection/>
  <ServicesSection/>
  <BigNFTSlider/>
    </div>
  )
}

export default Home