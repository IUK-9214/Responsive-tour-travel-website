import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImage from "../assets/2.jpg"


function Contact(){

    return(
        <>
          <Navbar/>
        <Hero
        cName="hero-mid"
        ImageUrl={AboutImage }
        Title="Contact Us"
     
        buttontext="Travel Plan"
        Url="/"
        cButton="Hide"
      />
        
        </>
    )
}


export default Contact;