import AboutGym from "@/components/shared/about-gym"
import Footer from "@/components/shared/footer"
import HomeGallery from "@/components/shared/home-gallery"
import Navbar from "@/components/shared/navbar"
import Offer from "@/components/shared/offer"
import OurClientSaying from "@/components/shared/our-client-saying"
import PagesHeader from "@/components/shared/pages-header"

const About = () => {
    return (
        <div>
            <Navbar />
            <PagesHeader title={'About Me'} />
            <AboutGym />
            <HomeGallery />
            <OurClientSaying />
            <Offer />
            <Footer />
        </div>
    )
}

export default About