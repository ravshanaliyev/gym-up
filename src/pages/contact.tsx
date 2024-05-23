import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import PagesHeader from "@/components/shared/pages-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IoHome } from "react-icons/io5";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { CgMail } from "react-icons/cg";


const Contact = () => {
    return (
        <div>
            <Navbar />
            <PagesHeader title={'Contact Us'} />
            <div className="sm:my-[40px] barlow md:my-[60xp] lg:my-[100px] w-full p-6 lg:p-0 lg:w-[1200px] mx-auto">
                <h3 className="text-[28px]">Get In Touch</h3>
                <div className="w-full block lg:flex justify-between gap-8">
                    <div className="w-full lg:w-2/3">
                        <form>
                            <div className="flex flex-col gap-7">
                                <Textarea placeholder="Enter Message" className="pt-4 text-base" />
                                <div className="flex gap-4">
                                    <Input className="py-6 text-base" type="text" placeholder="Enter Your Name" />
                                    <Input className="py-6 text-base" type="text" placeholder="Enter Your Email" />
                                </div>
                                <Input className="py-6 text-base" type="text" placeholder="Enter a subject" />
                            </div>
                            <div className="flex justify-start mt-4">
                                <Button type="submit" className="rounded-none text-base uppercase bg-white text-[#ff1313] border border-[#ff1313] hover:bg-[#ff1313] hover:text-white transition px-10 py-6" size={'lg'}>Send</Button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <div className="w-full h-fit py-6  flex flex-col items-center gap-8 justify-start">
                            <div className="flex items-center gap-4">
                                <IoHome className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">Buttonwood, California.</h3>
                                    <p className="text-muted-foreground">Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="flex  items-center gap-4">
                                <MdOutlinePhonelinkRing className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">+1 253 565 2365</h3>
                                    <p className="text-muted-foreground">Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <CgMail className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">support@colorlib.com</h3>
                                    <p className="text-muted-foreground">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact