import AboutGym from "@/components/shared/about-gym"
import Header from "@/components/shared/header"
import Navbar from "@/components/shared/navbar"
import OurClientSaying from "@/components/shared/our-client-saying"
import Services from "@/components/shared/services"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutGym />
            <Services />
            <OurClientSaying />
        </div>
    )
}

export default Home