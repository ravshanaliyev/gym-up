import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EnglishFlag from "../../assets/englishFlag.svg"
import RussiaFlag from "../../assets/russiaFlag.svg"
import UzbFlag from "../../assets/UzbFlag.svg"
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {

    const { i18n, t } = useTranslation()
    const currentLang: any = localStorage.getItem("lang")
    const navigate = useNavigate()

    const [language, setLanguage] = useState<string>(currentLang);


    const userData = localStorage.getItem("token");
    const user = userData && jwtDecode(userData);


    useEffect(() => {
        if (i18n && i18n.changeLanguage) {
            i18n.changeLanguage(language)
                .catch(error => {
                    console.error('Failed to change language:', error);
                });
        }
    }, [language, i18n]);

    return (
        <div className='navbar bg-black py-4 teko'>
            <div className="container flex items-center justify-between">
                <Link to={'/'}><img className='w-[120px] md:w-full' src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo.png" alt="" /></Link>
                <div className='flex items-center gap-x-[1rem]'>
                    <ul className='hidden lg:flex gap-8 items-center'>
                        <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">{t("navbar.home")}</Link></li>
                        <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/courses">{t("navbar.course")}</Link></li>
                        <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/gallery">{t("navbar.gallery")}</Link></li>
                        <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/about">{t("navbar.about")}</Link></li>
                        <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/contact">{t("navbar.contact")}</Link></li>
                    </ul>
                    <Select className="language-select" value={language} onChange={(e: SelectChangeEvent<string>) => setLanguage(e.target.value)} labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" autoWidth  >
                        <MenuItem className='text-[#fff] flex ' value="uz"><img src={UzbFlag} width={24} height={14} /><span className='text-[#fff]'>UZ</span></MenuItem>
                        <MenuItem className='text-[#fff] flex ' value="ru"><img src={RussiaFlag} /><span className='text-[#fff]'>RU</span></MenuItem>
                        <MenuItem className='text-[#fff] flex ' value="en"><img src={EnglishFlag} /><span className='text-[#fff]'>EN</span></MenuItem>
                    </Select>
                    {
                        // @ts-ignore
                        user ? <Button className='flex items-center justify-center text-xl uppercase rounded-full h-10 w-10'>{user?.FirstName?.slice(0, 1)}</Button>
                            : <Button size={'lg'} onClick={() => navigate("/auth/login")} className='rounded-none text-lg uppercase hidden md:block' >{t("navbar.become")}</Button>
                    }
                </div>
                <div className='block lg:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <IoMdMenu className='block lg:hidden text-3xl text-white' />
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <ul className='flex flex-col gap-4 mt-8 items-center'>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Home</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/about">About Me</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/courses">Courses</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/gallery">Gallery</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/shop">Shop</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/contact">Contact</Link></li>
                                {
                                    // @ts-ignore
                                    user ? <Button className='flex items-center justify-center text-xl uppercase rounded-full h-10 w-10' size={'lg'}>{user?.FirstName?.slice(0, 1)}</Button>
                                        : <Button className='rounded-none text-lg uppercase' size={'lg'}>{t("navbar.become")}</Button>
                                }

                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar