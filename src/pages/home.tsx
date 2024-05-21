import AboutGym from "@/components/shared/about-gym"
import Header from "@/components/shared/header"
import HomeGallery from "@/components/shared/home-gallery"
import Navbar from "@/components/shared/navbar"
import Offer from "@/components/shared/offer"
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
            <HomeGallery />
            <Offer />
        </div>
    )
}

export default Home