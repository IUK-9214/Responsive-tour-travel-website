import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImage from "../assets/night.jpg"
import Footer from "../component/Footer";
import Trip from "../component/Trip";

function Services(){

    return(
        <>
          <Navbar/>
        <Hero
        cName="hero-mid"
        ImageUrl={AboutImage }
        Title="Services"
     
        buttontext="Travel Plan"
        Url="/"
        cButton="Hide"
      />
      <Trip/>
        <Footer/>
        </>
    )
}


export default Services;