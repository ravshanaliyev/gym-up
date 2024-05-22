import AboutGym from "@/components/shared/about-gym"
import AboutPage from "@/components/shared/about-page"
import Footer from "@/components/shared/footer"
import HomeGallery from "@/components/shared/home-gallery"
import Navbar from "@/components/shared/navbar"
import Offer from "@/components/shared/offer"
import OurClientSaying from "@/components/shared/our-client-saying"

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutPage />
            <AboutGym />
            <HomeGallery />
            <OurClientSaying />
            <Offer />
            <Footer />
        </div>
    )
}

export default About