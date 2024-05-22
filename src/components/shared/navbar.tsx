import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='navbar bg-black py-7'>
            <div className="container flex items-center justify-between">
                <Link to={'/'}><img src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo.png" alt="" /></Link>
                <ul className='hidden lg:flex gap-8 items-center'>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Home</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/about">About Me</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Courses</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Gallery</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">My Service</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Blog</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Shop</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Contact</Link></li>
                    <Button className='rounded-none text-lg uppercase' size={'lg'}>Became a Member</Button>
                </ul>
                <div className='block md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <IoMdMenu className='block md:hidden text-3xl text-white' />
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <ul className='flex flex-col gap-4 mt-8 items-center'>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Home</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/about">About Me</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Courses</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Gallery</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">My Service</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Blog</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Shop</Link></li>
                                <li className=' hover:text-[#ff1313] transition text-[20px]'><Link to="/">Contact</Link></li>
                                <Button className='rounded-none text-lg uppercase' size={'lg'}>Became a Member</Button>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar