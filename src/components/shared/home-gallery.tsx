import { useTranslation } from "react-i18next"

const HomeGallery = () => {

    const {t} = useTranslation()

    return (
        <>
            <div className="my-10 hidden lg:block">
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
                                {/* <p className="text-[#fff] text-[15px] font-[600]">Fitness, Body</p> */}
                            </div>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery3.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                                {/* <p className="text-[#fff] text-[15px] font-[600]">Fitness, Body</p> */}
                            </div>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery4.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                                {/* <p className="text-[#fff] text-[15px] font-[600]">Fitness, Body</p> */}
                            </div>
                        </div>
                        <div className="group overflow-hidden relative">
                            <img className="   lg:max-w-[387px] object-cover w-full max-h-[340px] h-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery5.png" alt="" />
                            <div className=" translate-y-[100%] absolute left-0 top-0 w-full h-full transition duration-300 bg-[#000000b6] flex flex-col  items-center justify-center gap-y-2 group-hover:translate-y-0  ">
                                <span className="material-symbols-outlined rounded-[50%] bg-[#ff0000] p-3.5 text-[#fff] text-[28px] hover:bg-[#fff] hover:text-[#ff0000] hover:cursor-pointer">arrow_right_alt</span>
                                <h5 className="text-[#fff] font-[700] text-[1.5rem] ">{t("gallery-content.best_fitness")}</h5>
                                {/* <p className="text-[#fff] text-[15px] font-[600]">Fitness, Body</p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="my-10 lg:hidden">
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png" alt="" />
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery3.png" alt="" />
                    <img className="w-full" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery4.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default HomeGallery