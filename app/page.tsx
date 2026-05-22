import AboutSection from "@/app/about-us/page"
import BlogSection from "@/app/blog/page"
import TechnologySection from "@/app/technology/page"
import VehiclesSection from "@/app/bikes/page"
import HeroSection from "./heroSection/page"


export default function HomePage() {
  return (
    <main >
      
    
      <VehiclesSection />
      <TechnologySection />
      <AboutSection />
      <BlogSection />

    </main>
  )
}