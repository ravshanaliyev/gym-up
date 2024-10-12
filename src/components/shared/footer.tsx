import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="h-fit md:h-[500px] w-full bg-fixed " style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg03.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container w-full px-4  lg:mx-auto h-full grid grid-cols-2 lg:grid-cols-4 gap-4 py-10   place-items-center">
                <div>
                    <h4 className="text-white text-base lg:text-lg mb-4 teko">{t('footer.company')}</h4>
                    <ul>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.about_us')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.company_info')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.press_blog')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.privacy_policy')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-base lg:text-lg mb-4 teko">{t('footer.open_hour')}</h4>
                    <ul>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.monday')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.tuesday_friday')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.saturday')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.sunday')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-base lg:text-lg mb-4 teko">{t('footer.resources')}</h4>
                    <ul>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.home_insurance')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.travel_insurance')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.business_insurance')}</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>{t('footer.health_insurance')}</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col max-w-[270px]">
                    <img className="max-w-[150px] h-[24px] object-cover" src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo2_footer.png" alt="" />
                    <p className="my-6 text-[#c4c4c4] text-[14px] leading-[24px]">{t('footer.trade_war_text')}</p>
                    <div className="flex items-center gap-4">
                        <Link to={'/'}>
                            <FaFacebookF className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        </Link>
                        <Link to={'/'}>
                            <FaTwitter className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        </Link>
                        <Link to={'/'}>
                            <TbWorld className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        </Link>
                        <Link to={'/'}>
                            <FaInstagram className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
