
import AboutSection from "@/components/sections/core/AboutSection"
import BlogSection from "@/components/sections/core/BlogSection"
import TechnologySection from "@/components/sections/core/TechnologySection"
import VehiclesSection from "@/components/sections/core/VehiclesSection"
import Testride from "./Testride/page"



import VehiclesSection from "@/app/bikes/page"
import HeroSection from "./heroSection/page"
import WhyChooseSection from "./whyChooseUs/page"
import ReadyToRide from "./readyToRide/page"




export default function HomePage() {
  return (
    <main >
      

{/*       
      <VehiclesSection />
      <TechnologySection />
      <AboutSection />
      <BlogSection /> */}
    <HeroSection />
    <WhyChooseSection />
      <VehiclesSection />
      <TechnologySection />
      <AboutSection />
      <BlogSection />

 

    
      <Testride />


    </main>
  )
}