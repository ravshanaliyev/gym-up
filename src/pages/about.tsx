import { AboutGym, Footer, HomeGallery, Navbar, Offer, OurClientSaying, PagesHeader } from "@/components"

const About = () => {
    return (
        <div>
            <Navbar />
            <PagesHeader title={'About Us'} />
            <AboutGym />
            <HomeGallery />
            <OurClientSaying />
            <Offer />
            <Footer />
        </div>
    )
}

export default About