import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImage from "../assets/night.jpg"

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
        
        </>
    )
}


export default Services;