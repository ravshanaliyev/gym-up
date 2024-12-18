import { useGetGallery } from "@/service"
import Marquee from "react-fast-marquee"
// import { useTranslation } from "react-i18next"

const HomeGallery = () => {

    // const { t } = useTranslation()

    const { data: ImagesData } = useGetGallery()

    console.log(ImagesData?.data.data);
    const images = ImagesData?.data.data || [];
    const midIndex = Math.ceil(images.length / 2); // Calculate the middle index
    const firstHalf = images.slice(0, midIndex); // First half of the images
    const secondHalf = images.slice(midIndex); // Second half of the images

    return (
        <>
            {/* <div className="my-10 hidden lg:block">
                <div className="w-full h-[700px]   lg:grid grid-cols-2 justify-items-center  gap-1 my-6">
                    <div className="max-w-[650px] h-[580px] lg:mb-0 group overflow-hidden relative">
                        <img className="w-full h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png" alt="" />
                        <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                            <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                            <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                        </div>
                    </div>

                    <div className="w-full lg grid grid-cols-2 grid-rows-2 gap-2">
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                            </div>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery3.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                            </div>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery4.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                            </div>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery5.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            {/* <div className="my-10 lg:hidden">
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png" alt="" />
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery3.png" alt="" />
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery4.png" alt="" />
                </div>
            </div> */}
            <div className="lg:my-[50px] my-[40px] flex items-center flex-col gap-8">
                <h2 className="text-[24px] lg:text-[36px] font-bold  mb-6">Our Gallery</h2>
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
        </>
    )
}

export default HomeGallery