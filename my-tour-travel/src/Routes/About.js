import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImage from "../assets/night.jpg"
function About(){

    return(
        <>
          <Navbar/>
           <Hero
        cName="hero-mid"
        ImageUrl={AboutImage }
        Title="About"
     
        buttontext="Travel Plan"
        Url="/"
        cButton="Hide"
      />
        
        </>
    )
}


export default About;