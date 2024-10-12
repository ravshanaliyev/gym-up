import { AboutGym, Footer, HomeGallery, Navbar, Offer, OurClientSaying, PagesHeader } from "@/components"
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation(); 

    return (
        <div>
            <Navbar />
            <PagesHeader title={t('about-us.title')} />
            <AboutGym />
            <HomeGallery />
            <OurClientSaying />
            <Offer />
            <Footer />
        </div>
    )
}

export default About