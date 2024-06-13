import { useEffect } from 'react'
import { Button } from '../ui/button'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='teko h-[600px] md:h-[640px] bg-black w-full flex justify-start items-center bg-fixed ' style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/hero/h1_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className=" flex flex-col justify-start w-full  md:w-[670px] md:ml-12">
                    <div className="flex items-center gap-4 text-[#ff1313]">
                        <div data-aos='fade-right' data-aos-duration='800' className='h-[3px] w-[50px] md:w-[100px] bg-[#ff1313] '></div>
                        <h3 data-aos='fade-right' data-aos-duration='800' className='uppercase  sm:text-xl md:text-2xl'>With patrick potter</h3>
                    </div>
                    <h1 data-aos='fade-right' data-aos-delay='400' data-aos-duration='800' className='text-white text-[36px]  md:text-[64px] font-bold uppercase leading-snug my-4'>Build Perfect body Shape for good and Healthy life.</h1>
                    <div>
                        <Button onClick={() => navigate("/auth/login")} data-aos='fade-right' data-aos-delay='200' data-aos-duration='800' className='rounded-none text-lg md:text-xl uppercase px-8 md:px-12 py-4 md:!py-7' size={'lg'}>Became a Member</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header