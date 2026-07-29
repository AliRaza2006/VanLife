import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import AboutPagePhoto from "../images/AboutPagePhoto.png"
export default function About()
{
    return(
        <>
        <Header/>
        <div className="About">
            <img src={AboutPagePhoto} alt="A man sitting on a van."/>
            <div>
                <p className="AboutHook">Don't squeeze in a sedan when you could relax in a van.</p>
                <p className="AboutParagraph">
                    Our mission is to enliven your road trip with the perfect travel van
                    rental. Our vans are recertified before each trip to ensure your travel
                    plans can go off without a hitch.<br/>(Hitch costs extra 😉)
                    <br /><br />
                    Our team is full of vanlife enthusiasts who know firsthand the magic of
                    touring the world on 4 wheels.
                </p>
                <div className="YellowBoxInAbout">
                    <p>Your destination is waiting.<br/>Your van is ready.</p>
                    <button>Explore our vans</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}