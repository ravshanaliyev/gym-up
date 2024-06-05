import Footer from "@/components/shared/footer"
import HomeGallery from "@/components/shared/home-gallery"
import Navbar from "@/components/shared/navbar"
import PagesHeader from "@/components/shared/pages-header"
import { useGetGallery } from "@/service/query/useGetGallery"

import Image1 from "../assets/gallery1.jpg"
import Image2 from "../assets/gallery2.jpg"
import Image3 from "../assets/gallery3.jpg"
import Image4 from "../assets/gallery4.jpg"
import Image5 from "../assets/gallery6.jpg"
// import Image6 from "../assets/gallery6.jpg"
// import Image7 from "../assets/gallery7.jpg"

const Gallery = () => {

    const { data } = useGetGallery()

    console.log(data);
    


    const ImageData = [Image1, Image2, Image3, Image4, Image5]
    console.log(ImageData);
    



    return (
        <div>
            <Navbar />
            <PagesHeader title={'My Gallery'} />
            <div className="sm:my-[40px] md:my-[60xp] lg:my-[100px]">
                <HomeGallery />
                &nbsp;
            </div>

            {/* <marquee >
                <div className="flex items-center justify-center gap-x-[2rem]">
                    {
                        ImageData.map((image, index) =>
                            <img key={index} className="w-[500px] h-[260px] object-cover rounded-[6px]" src={image} alt="Rasm" />
                        )
                    }
                </div>
            </marquee> */}

            <Footer />
        </div>
    )
}

export default Gallery