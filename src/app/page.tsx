
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import AboutSection from "@/components/about/About";
import Bottom from "@/components/bottom-images/BottomImages";
import Portfolio from "@/components/portfolio/Portfolio"
import Services from "@/components/service/Service-section";
import Testimonials from "@/components/testimonial/Testimonial"
import ContactUs from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (<>

      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Bottom/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    

  </>
       
  );
}
