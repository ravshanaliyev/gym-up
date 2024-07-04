import { useTranslation } from "react-i18next"
import { Button } from "../ui/button"

const Offer = () => {

    const {t} = useTranslation()

    const lang = localStorage.getItem("lang")

    return (
        <div className="h-fit teko md:h-[350px] mt-16" style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg02.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full lg:max-w-[1200px] py-10 lg:py-0 px-4 lg:mx-auto h-full block md:flex items-center justify-between">
                <h3 style={lang === 'ru' ? {fontSize: "36px"} :{}} className="text-[40px] md:text-[55px] w-full md:w-[570px] leading-snug font-bold text-white">{t("offer.title")}</h3>
                <Button style={lang === 'ru' ? {fontSize: "17px"} :{}} className='rounded-none text-lg  px-8 md:px-12 py-4 md:!py-7' size={'lg'}>{t("offer.services")}</Button>
            </div>
        </div>
    )
}

export default Offer