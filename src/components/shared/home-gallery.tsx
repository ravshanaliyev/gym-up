
const HomeGallery = () => {
    return (
        <>
            <div className="my-10 hidden lg:block">
                <div className="w-full h-[700px]  lg:flex gap-8 my-6">
                    <div className="w-1/2 lg:mb-0">
                        <img src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-7">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <img className="w-full lg:w-[357px]" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                            <img className="w-full lg:w-[357px]" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery3.png" alt="" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <img className="w-full lg:w-[357px]" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery4.png" alt="" />
                            <img className="w-full lg:w-[357px]" src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery5.png" alt="" />
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