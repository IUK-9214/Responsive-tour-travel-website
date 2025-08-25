import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import AboutImage from "../assets/2.jpg"
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";


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
      <ContactForm/>
        <Footer/>
        </>
    )
}


export default Contact;