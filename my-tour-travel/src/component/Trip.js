
import "./Tripstylesheet.css"
import TripData from "./TripData";
import trippy1 from "../assets/5.jpg"
import trippy2 from "../assets/6.jpg"
import trippy3 from "../assets/8.jpg"


function Trip() {
    return (
        <div className="trip">
            <h1>
                Recent Trip
            </h1>
            <p>
                You can discover unique destinations using Google Maps
            </p>

            <div className="trip-card">
                <TripData
                    image={trippy1}
                    heading="Trip In Indonesia"
                    text="A trip to Indonesia offers a journey through a world of diverse natural beauty and vibrant cultures, encompassing everything from the iconic beaches and lush rice paddies of Bali to the powerful volcanic landscapes of Java and the rich biodiversity of the Sumatra jungles. Travelers can explore ancient Hindu temples, witness unique festivals, go island-hopping across thousands of islands, or dive into crystal-clear waters teeming with marine life. The country's friendly people, warm climate, and array of activities, from surfing and hiking to yoga and wildlife encounters, make it an ideal destination for adventure and cultural immersion."
                />
                <TripData
                    image={trippy2}
                    heading="Trip In Malaysia"
                    text="A trip to Malaysia offers a vibrant journey through diverse cultures and landscapes, from the bustling metropolis of Kuala Lumpur and its iconic Petronas Twin Towers to the natural wonders of the rainforests and idyllic islands. Travelers can explore historic temples, sample delicious street food influenced by Malay, Chinese, and Indian traditions, and discover unique wildlife, creating a rich experience that blends modern adventure with cultural immersion."
                />
                <TripData
                    image={trippy3}
                    heading="Trip In France"
                    text="A memorable trip to France often involves marveling at iconic landmarks like the Eiffel Tower, immersing oneself in art at the Louvre, and indulging in delicious French cuisine, all while exploring charming villages and experiencing the unique French art de vivre. From the romantic city of Paris to the diverse landscapes of the Alps and the French Riviera, France offers a rich tapestry of culture, beauty, and historical charm that leaves a lasting impression on visitors."
                />
            </div>
        </div>

    );
}

export default Trip

