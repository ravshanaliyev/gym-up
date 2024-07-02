import { AboutGym, Footer, HomeGallery, Navbar, Offer, OurClientSaying, PagesHeader } from "@/components"

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