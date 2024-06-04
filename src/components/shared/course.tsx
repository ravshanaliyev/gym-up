import { CourseType } from "@/@types/types"
import Auth from "@/pages/auth/Auth"
import { useGetCourses } from "@/service/query/useGetCourses"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

const Course = () => {

    const { data: Courses } = useGetCourses()
    const [openAuth, setOpenAuth] = useState<boolean>(false)
    const navigate = useNavigate()
    const token = false

    const handleDoCourse = (course_id: number) => {
        if (token) {
            navigate(`/courses/${course_id}`)
        }
        else {
            setOpenAuth(true)
        }
    }

    return (
        <div className='container my-10'>
            <div className="w-full barlow lg:max-w-[1200px] mx-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {
                    Courses?.data.map((course: CourseType) =>
                        <div onClick={() => handleDoCourse(course.id)} key={course.id} className="max-w-[350px]   rounded-xl p-3 border  hover:shadow-2xl transition  h-fit cursor-pointer">
                            <img className='w-full h-[330px] object-cover rounded-xl' src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png" />
                            <h3 className="text-xl  mt-4 mb-0"><span className="text-[#808080]">Course:</span> {course.title}</h3>
                        </div>
                    )
                }
                <Auth openAuth={openAuth} setOpenAuth={setOpenAuth} />
            </div>
        </div>
    )
}

export default Course