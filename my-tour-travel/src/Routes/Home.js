import Destination from "../component/Destination";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Trip from "../component/Trip";


function Home() {

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        ImageUrl="https://images.pexels.com/photos/1542241/pexels-photo-1542241.jpeg"
        Title="Your Journey Your Story"
        text="Chose your favourite Destination"
        buttontext="Travel Plan"
        Url="/"
        cButton="Show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  )
}


export default Home;