import Footer from "@/components/shared/footer"
import HomeGallery from "@/components/shared/home-gallery"
import Navbar from "@/components/shared/navbar"
import PagesHeader from "@/components/shared/pages-header"

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <PagesHeader title={'My Gallery'} />
            <div className="sm:my-[40px] md:my-[60xp] lg:my-[100px]">
                <HomeGallery />
            </div>
            <Footer />
        </div>
    )
}

export default Gallery