import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImage from "../assets/night.jpg"
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";
function About() {

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        ImageUrl={AboutImage}
        Title="About"

        buttontext="Travel Plan"
        Url="/"
        cButton="Hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}


export default About;