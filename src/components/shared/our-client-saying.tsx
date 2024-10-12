import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useTranslation } from "react-i18next"

const OurClientSaying = () => {
    const { t } = useTranslation()  // Import useTranslation hook

    return (
        <div className="h-full py-6 lg:py-0  lg:h-[800px] flex flex-col justify-center">
            <div className="container">
                <div className="w-full lg:max-w-[1200px] mx-auto block  md:flex items-center justify-between gap-2">
                    <div className="w-full md:max-w-[480px] h-[400px] object-cover lg:h-[620px]">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className="w-full mt-6 md:w-1/2 md:mt-0">
                        <div className="flex items-center justify-center lg:justify-start  gap-4 text-[#ff1313]">
                            <div className='h-[2px] w-[100px] bg-[#ff1313]'></div>
                            <h3 className='uppercase  text-[16px] teko'>{t("client_feedback.title")}</h3>
                        </div>
                        <h3 className="text-[24px]  md:text-[32px] my-4 font-bold  text-center lg:text-left teko">{t("client_feedback.subtitle")}</h3> {/* Translate subtitle */}
                        <div className="relative">
                            <img className="absolute left-[-195px]" src="https://themewagon.github.io/fitnessclub/assets/img//gallery/qutaion.png" alt="" />
                        </div>
                        <div>
                            <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full relative">
                                <CarouselContent>
                                    {data.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <p className="text-base lg:text-lg barlow">{t(`client_feedback.comments.${item.id}.comment`)}</p> {/* Translate each comment */}
                                                <div className="flex items-center gap-4">
                                                    <h3 className="text-lg lg:text-[22px] font-semibold mt-4 mb-4 teko">{t(`client_feedback.comments.${item.id}.name`)}</h3> {/* Translate name */}
                                                    <p className="text-base teko">{t("client_feedback.role")}</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-[-10px]" />
                                <CarouselNext className="absolute right-[-10px]" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClientSaying


const data = [
    {
        id: 1,
        name: "John Doe",
        comment: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
        id: 2,
        name: "John Doe",
        comment: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
        id: 3,
        name: "John Doe",
        comment: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
        id: 4,
        name: "John Doe",
        comment: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
    {
        id: 5,
        name: "John Doe",
        comment: "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    },
]