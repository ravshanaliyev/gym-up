import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Footer = () => {
    return (
        <div className="h-fit md:h-[500px] w-full " style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg03.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full px-4 lg:w-[1200px] lg:mx-auto h-full grid grid-cols-2 lg:grid-cols-4 gap-4 py-10 place-items-center  ">
                <div>
                    <h4 className="text-white text-xl mb-4">COMPANY</h4>
                    <ul>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>About Us</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>Company</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>Press & Blog</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-xl mb-4">OPEN HOUR</h4>
                    <ul>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>Monday 11am-7pm</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}> Tuesday-Friday 11am-8pm</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}> Saturday 10am-6pm</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}> Sunday 11am-6pm</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-xl mb-4">RECOURCES</h4>
                    <ul>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>Home Insurance</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}>Travel Insurance</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}> Business Insurance</Link></li>
                        <li className="text-lg text-[#c4c4c4] mb-2"><Link to={'/'}> Health Insurance</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col w-[200px]">
                    <img src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo2_footer.png" alt="" />
                    <p className="my-4 text-[#c4c4c4]">GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
                    <div className="flex items-center gap-4">
                        <FaFacebookF className="text-[#c4c4c4] cursor-pointer text-xl" />
                        <FaTwitter className="text-[#c4c4c4] cursor-pointer text-xl" />
                        <TbWorld className="text-[#c4c4c4] cursor-pointer text-xl" />
                        <FaInstagram className="text-[#c4c4c4] cursor-pointer text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer