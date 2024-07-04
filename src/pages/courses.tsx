import { CourseType } from "@/@types/types"
import { Footer, Navbar, Offer, PagesHeader } from "@/components"
import { useGetCourses } from "@/service"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Courses = () => {
    const navigate = useNavigate()
    const token: any = localStorage.getItem('token') && jwtDecode(localStorage.getItem('token')!)
    const role: any = token && token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    useEffect(() => {
        role === "Admin" ? navigate('/user-dashboard') : navigate('/courses')
    }, [token])


    const { data: Courses } = useGetCourses()

    console.log(Courses?.data);


    return (
        <div>
            <Navbar />
            <PagesHeader title={'All Courses'} />

            <div className="grid grid-cols-3 justify-items-center gap-[1.5rem]  mt-[3rem]">
                {
                    Courses?.data.map((course: CourseType) =>
                        <div className=" w-full border rounded-[6px] overflow-hidden border-[#d6e1f0] ">
                            <img className="w-full object-cover h-[250px] m-auto" src={`https://api.bekgym.uz/images/${course.attachment.fileName}`} alt={course.title} />
                            <div className="mt-[1rem] px-[12px]">
                                <h3 className="text-[20px] font-[650]">{course.title}</h3>
                                <p className="text-[15px] h-[70px] mt-[5px]">{course.description.slice(0, 70)}</p>
                                <div className="flex items-center justify-between py-[10px]">
                                    <Link to='' className="w-full flex justify-center max-w-[180px] py-[8px] bg-[#ff1414] rounded-[6px] text-[#fff] font-[600] hover:bg-[#f34d4d] hover:cursor-pointer">Kursni Olish</Link>
                                    <a  className="flex items-center gap-x-[3px] font-[550] text-[blue] px-[10px] py-[5px] rounded-[6px] border cursor-pointer bg-[rgba(70,70,255,0.09)] border-[#674dff] hover:bg-[rgba(70,70,255,0.25)]"> <span className="material-symbols-outlined text-[22px]">phone</span>Bog'lanish</a>
                                
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <Offer />
            <Footer />
        </div>
    )
}

export default Courses