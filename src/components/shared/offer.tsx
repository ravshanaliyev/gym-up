import { useTranslation } from "react-i18next"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const Offer = () => {

    const { t } = useTranslation()

    return (
        <div className="h-fit teko md:h-[350px] mt-16" style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg02.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full lg:max-w-[1200px] py-10 lg:py-0 px-4 lg:mx-auto h-full block md:flex items-center justify-between">

                <h3 className="text-[26px] md:text-[42px] w-full md:w-[570px] leading-snug font-bold text-white">{t("offer.title")}</h3>
                <Link to={'/about'}>
                    <Button className='rounded-none text-base mt-4 lg:mt-0 lg:text-lg  px-8 md:px-12 py-4 md:!py-7' size={'lg'}>{t("offer.services")}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Offer