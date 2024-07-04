import { IoIosFitness, IoMdFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { Button } from "../ui/button";

const Services = () => {
    return (
        <div className="h-full py-6 lg:py-0  lg:h-[800px] flex flex-col justify-center bg-fixed" style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg01.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="w-full lg:max-w-[1200px] mx-auto">
                    <div className="flex items-center justify-center lg:justify-start  gap-4 text-[#ff1313]">
                        <div className='h-[3px] w-[100px] bg-[#ff1313]'></div>
                        <h3 className='uppercase  text-[16px] teko'>OUR SERVICES FOR YOU</h3>
                    </div>
                    <h3 className="text-[20px] lg:text-[24px] my-3 lg:my-4 font-bold text-white text-center lg:text-left teko">PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h3>
                    <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 lg:mt-12 place-items-center">
                        <div className="card bg-white text-black max-w-[370px] h-[370px] py-10 px-12 text-center group mb-4">
                            <IoIosFitness className="text-[50px] mx-auto" />
                            <h3 className="text-[20px] font-semibold mt-6 mb-4 teko">QUALITY EQUIPMENT</h3>
                            <p className="text-base text-[#303133] barlow">The sea freight service has grown consider ably in recent years. We spend timetting to kn. We spend timetting to kn.</p>
                            <Button className='rounded-none teko text-sm lg:text-base px-10 h-[45px] mt-6 w-full  transition duration-300'>Discover More About Us</Button>
                        </div>
                        <div className="card bg-white text-black max-w-[370px] h-[370px] py-10 px-12 text-center group mb-4">
                            <IoFitness className="text-[50px] mx-auto" />
                            <h3 className="text-[20px] font-semibold mt-6 mb-4 teko">QUALITY EQUIPMENT</h3>
                            <p className="text-base text-[#303133] barlow">The sea freight service has grown consider ably in recent years. We spend timetting to kn. We spend timetting to kn.</p>
                            <Button className='rounded-none teko text-sm lg:text-base px-10 h-[45px] mt-6 w-full  transition duration-300'>Discover More About Us</Button>
                        </div>
                        <div className="card bg-white text-black max-w-[370px] h-[370px] py-10 px-12 text-center group mb-4">
                            <IoMdFitness className="text-[50px] mx-auto" />
                            <h3 className="text-[20px] font-semibold mt-6 mb-4 teko">QUALITY EQUIPMENT</h3>
                            <p className="text-base text-[#303133] barlow">The sea freight service has grown consider ably in recent years. We spend timetting to kn. We spend timetting to kn.</p>
                            <Button className='rounded-none teko text-sm lg:text-base px-10 h-[45px] mt-6 w-full  transition duration-300'>Discover More About Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services