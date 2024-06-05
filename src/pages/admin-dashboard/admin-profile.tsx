import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import User from '../../assets/User.jpg'
import Background from '../../assets/Bg.jpg'

const AdminProfile = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">My Profile</h3>
                <Link to="/admin/add-course"><Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white">Update Profile</Button></Link>
            </div>
            <div className="relative h-full pb-4 lg:h-[600px] my-4 bg-white">
                <img className="w-full h-[250px] " src={Background} alt="" />
                <div className="absolute top-3/3 left-1/2 transform backdrop-blur rounded-full p-3 -translate-x-1/2 -translate-y-1/2">

                    <img className="w-40 backdrop-blur rounded-full" src={User} alt="" />

                </div>
                <div className="flex flex-col items-center mt-24 w-full lg:w-[700px] mx-auto">
                    <h3 className="text-2xl font-semibold">Danish Heilium</h3>
                    <p className="text-muted-foreground">Ui/Ux Designer</p>
                    <div className="flex gap-4 border px-4 py-2 rounded-lg mt-2">
                        <p className="text-sm border-r pr-2"><span className="text-[#000] text-lg font-bold ">10</span> Courses</p>
                        <p className="text-sm border-r pr-2"><span className="text-[#000] text-lg font-bold">120</span> Students</p>
                        <p className="text-sm"><span className="text-[#000] text-lg font-bold">150</span> Lessons</p>
                    </div>
                    <h3 className="text-xl mt-4 mb-2 font-semibold">About Me</h3>
                    <p className="text-base text-muted-foreground m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero.</p>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile