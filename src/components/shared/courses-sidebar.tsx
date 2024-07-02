import { CourseType } from "@/@types/types";
import { useGetCourses } from "@/service"
import { Link, NavLink } from "react-router-dom"

const CourseSidebar = () => {
    const { data } = useGetCourses()
    return (
        <aside className="max-w-[270px] w-full py-[16px] px-[10px] bg-[#0A112E] h-[100vh] text-center">
            <Link className=" flex justify-center" to={'/'}><img src="https://themewagon.github.io/fitnessclub/assets/img/logo/logo.png" /></Link>
            <ul className="mt-[4rem] flex flex-col gap-y-[1.5rem] px-[15px] w-full">
                {data?.data.map((course: CourseType) => (
                    <li className="w-full " key={course.id}>
                        <NavLink to={`course/${course.id}`} className={({ isActive }) => isActive ? 'bg-[#ff1313] w-full rounded-[6px] block px-2 py-2 text-white text-lg' : 'w-full block px-2 py-2 transition-[.3s] text-white text-lg hover:bg-[#ff1313] cursor-pointer rounded-[6px] '}>
                            {course.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default CourseSidebar
