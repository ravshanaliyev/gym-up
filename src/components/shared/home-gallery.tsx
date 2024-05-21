
const HomeGallery = () => {
    return (
        <div className="w-full h-[700px] block lg:flex gap-8 my-10">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
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
    )
}

export default HomeGallery