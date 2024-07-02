import { AboutGym, Footer, Header, HomeGallery, Navbar, Offer, OurClientSaying, Services } from "@/components"

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
            <Footer />
        </div>
    )
}

export default Home