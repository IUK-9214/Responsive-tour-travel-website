import Hero from "../component/Hero";
import Navbar from "../component/Navbar";


function Home(){

    return(
        <>
          <Navbar/> 
          <Hero
          cName="hero"
          ImageUrl="https://images.pexels.com/photos/2221314/pexels-photo-2221314.jpeg"
          Title="Your Journey Your Story"
          text="Chose your favourite Destination"
          />
        <h1>Home</h1>
        </>
    )
}


export default Home;