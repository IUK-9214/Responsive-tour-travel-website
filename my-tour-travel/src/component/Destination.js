import mountain1 from "../assets/1.jpg"
import mountain2 from "../assets/2.jpg"
import mountain3 from "../assets/3.jpg"
import mountain4 from "../assets/4.jpg"
import "./Destination.css"
import DestinationData from "./DestinationData"
import Trip from "./Trip"


const Destination = () => {
    return (

        <div className="Destination">
            <h1>
                Popular Destinations
            </h1>
            <p>
                Tour give You the Opportunity to see a lot within a time frame
            </p>

            <DestinationData
                classname="first-desc"
                heading="Taal Volcano, Batangas"
                text="However, it wasn't until the 1960s that the passage became common when Letraset revolutionized the advertising industry with its transfer sheets. These innovative sheets allowed designers to apply pre-printed lorem ipsum text in various fonts and formats directly onto their mockups and prototypes.These innovative sheets allowed designers to apply pre-printed lorem ipsum text in various fonts and formats directly onto their mockups and prototypes."
                image1={mountain1}
                image2={mountain2}

            />
            <DestinationData
                classname="first-desc-reverse"
                heading="Mt. Daguldul, Batangas"
                text="However, it wasn't until the 1960s that the passage became common when Letraset revolutionized the advertising industry with its transfer sheets. These innovative sheets allowed designers to apply pre-printed lorem ipsum text in various fonts and formats directly onto their mockups and prototypes.These innovative sheets allowed designers to apply pre-printed lorem ipsum text in various fonts and formats directly onto their mockups and prototypes."
                image1={mountain3}
                image2={mountain4}

            />


        </div>
    )

}

export default Destination;