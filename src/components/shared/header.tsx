import { useEffect } from 'react'
import { Button } from '../ui/button'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const navigate = useNavigate()
    useEffect(() => {
        Aos.init()
    }, [])



    const {t} = useTranslation()

 
    const langValue = localStorage.getItem("lang")

    

    return (
        <div className='teko relative h-[600px] md:h-[640px] bg-black w-full flex justify-start items-center bg-fixed ' style={{ backgroundImage: window.innerWidth < 450 ? 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png")' : 'url("https://themewagon.github.io/fitnessclub/assets/img/hero/h1_hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
            {
                window.innerWidth < 450 && <div className="absolute inset-0   h-[600px]  w-full" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            }
            <div className="container">
                <div className=" flex flex-col justify-start w-full  md:w-[670px] md:ml-12">
                    <div className="flex items-center gap-4 text-[#ff1313]">
                        <div data-aos='fade-right' data-aos-duration='800' className='h-[3px] w-[50px] md:w-[100px] bg-[#ff1313] '></div>
                        <h3 data-aos='fade-right' data-aos-duration='800' className='  sm:text-xl md:text-2xl'>{t("hero.with")}</h3>
                    </div>
                    <h1 data-aos='fade-right' data-aos-delay='400' data-aos-duration='800' style={langValue === 'ru'  ? {fontSize: '40px'} : langValue === 'uz'  ? {fontSize: '55px'} : {}} className='text-white text-[36px]   md:text-[64px] font-bold capitalize leading-snug my-4'>{t("hero.main_text")}</h1>
                    <div>
                        <Button onClick={() => navigate("/auth/login")} data-aos='fade-right' data-aos-delay='200' data-aos-duration='800' className='rounded-none text-lg md:text-xl  px-8 md:px-12 py-4 md:!py-7' size={'lg'}>{t("navbar.become")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header