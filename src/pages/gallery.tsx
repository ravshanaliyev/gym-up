import { useGetGallery } from "@/service"
import Marquee from "react-fast-marquee"

import { Footer, Navbar, PagesHeader } from "@/components"


const Gallery = () => {

    const { data: ImagesData } = useGetGallery()

    console.log(ImagesData?.data.data);
    const images = ImagesData?.data.data || [];
    const midIndex = Math.ceil(images.length / 2); // Calculate the middle index
    const firstHalf = images.slice(0, midIndex); // First half of the images
    const secondHalf = images.slice(midIndex); // Second half of the images

    return (
        <div>
            <Navbar />
            <PagesHeader title={'My Gallery'} />
            {/* <div className="sm:my-[40px] md:my-[60xp] lg:my-[100px]">
                <HomeGallery />
            </div> */}

            <div className="lg:my-[60px] my-[40px] flex items-center flex-col gap-8">
                {
                    firstHalf && <Marquee direction="left">
                        <div className="flex items-center justify-center  gap-x-[1rem] lg:gap-x-[2rem]">
                            {firstHalf.map((image: any, index: number) => (
                                <img
                                    key={index}
                                    className="w-[300px] h-[350px] lg:w-[350px] lg:h-[400px] object-cover rounded-[6px] last:mr-[1rem] lg:last:mr-[2rem]"
                                    src={`https://api.bekgym.uz/images/${image?.attachment?.fileName}`}
                                    alt="Rasm"
                                />
                            ))}
                        </div>
                    </Marquee>
                }
                {
                    secondHalf && <Marquee direction="right">
                        <div className="flex items-center justify-center gap-x-[1rem] lg:gap-x-[2rem]">
                            {secondHalf.map((image: any, index: number) => (
                                <img
                                    key={index}
                                    className="w-[300px] h-[350px] lg:w-[350px] lg:h-[400px] object-cover rounded-[6px] last:mr-[1rem] lg:last:mr-[2rem]"
                                    src={`https://api.bekgym.uz/images/${image?.attachment?.fileName}`}
                                    alt="Rasm"
                                />
                            ))}
                        </div>
                    </Marquee>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Gallery