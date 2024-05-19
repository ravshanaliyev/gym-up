import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar = () => {
    return (
        <div className='navbar bg-black py-7'>
            <div className="container flex items-center justify-between">
                <Link to={'/'}><img src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo.png" alt="" /></Link>
                <ul className='hidden lg:flex gap-8 items-center'>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Home</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">About</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Classes</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Gallery</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Blog</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Shop</Link></li>
                    <li className='text-white hover:text-[#ff1313] transition text-[20px]'><Link to="/">Contact</Link></li>
                    <Button className='rounded-none text-lg uppercase' size={'lg'}>Became a Member</Button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar