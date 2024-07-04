import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

const AboutGym = () => {


    const {t} = useTranslation()
    const lang = localStorage.getItem("lang")

    return (
        <div className='container my-16'>
            <div className="w-full  mx-auto">
                <div className="w-full  lg:flex items-center justify-center gap-x-20">
                    <div className="w-full max-w-[570px]  h-[600px] ">
                        <img className='w-full h-full object-cover' src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                    </div>
                    <div className="w-full  mt-6 lg:mt-0">
                        <div className="flex items-center gap-4 text-[#ff1313]">
                            <div className='h-[3px] w-[80px] bg-[#ff1313]'></div>
                            <h3  className='  text-2xl  teko'>{t("about.sub_title")}</h3>
                        </div>
                        <h2 style={lang === 'ru' ? {fontSize: "27px"} :{}} className='text-[44px] font-bold text-[#2c234d] leading-snug my-4 teko max-w-[520px]'>{t("about.main_title")}</h2>
                        <p className='text-base text-[#212025] mb-4 barlow font-semibold max-w-[600px]'>{t("about.main_text")}</p>
                        <p className='text-base text-[#212025] my-4 barlow max-w-[520px]'>{t("about.sub_text")}</p>
                        <Button className='rounded-none text-xl  px-10 !py-6' size={'lg'}>{t("navbar.become")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutGym