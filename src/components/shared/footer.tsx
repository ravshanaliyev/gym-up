import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Footer = () => {
    return (
        <footer className="h-fit md:h-[500px] w-full bg-fixed" style={{ backgroundImage: 'url("https://themewagon.github.io/fitnessclub/assets/img/gallery/section_bg03.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container w-full px-4  lg:mx-auto h-full grid grid-cols-2 lg:grid-cols-4 gap-4 py-10 place-items-center  ">
                <div>
                    <h4 className="text-white text-base lg:text-lg mb-4 teko">COMPANY</h4>
                    <ul>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>About Us</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>Company</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>Press & Blog</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-base lg:text-lg mb-4 teko">OPEN HOUR</h4>
                    <ul>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>Monday 11am-7pm</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}> Tuesday-Friday 11am-8pm</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}> Saturday 10am-6pm</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}> Sunday 11am-6pm</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white text-base lg:text-lg mb-4 teko">RECOURCES</h4>
                    <ul>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>Home Insurance</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}>Travel Insurance</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}> Business Insurance</Link></li>
                        <li className=" barlow text-[#c4c4c4] mb-2 text-[15px]"><Link to={'/'}> Health Insurance</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col max-w-[270px]">
                    <img className="max-w-[170px] h-[32px] object-cover" src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo2_footer.png" alt="" />
                    <p className="my-6 text-[#c4c4c4] text-[14px] leading-[24px]">GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
                    <div className="flex items-center gap-4">
                        <FaFacebookF className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        <FaTwitter className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        <TbWorld className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                        <FaInstagram className="text-[#c4c4c4] cursor-pointer text-base lg:text-lg" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer