import { CourseType } from "@/@types/types"
import { useGetCourses } from "@/service/query/useGetCourses"
import { Link } from "react-router-dom"

const Course = () => {

    const {data: Courses} = useGetCourses()
    
    return (
        <div className='container my-10'>
            <div className="w-full barlow lg:max-w-[1200px] mx-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {
                    Courses?.data.map((course: CourseType) => 
                <Link to={`/courses/${course.id}`} key={course.id} className="max-w-[350px]   rounded-xl p-3 border  hover:shadow-2xl transition  h-fit cursor-pointer">
                    <img className='w-full h-[330px] object-cover rounded-xl' src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png" alt="" />
                    <h3 className="text-xl  mt-4 mb-0"><span className="text-[#808080]">Course:</span> {course.title}</h3>
                </Link>


                    )
                }
               
            </div>
        </div>
    )
}

export default Course