import CourseSidebar from "@/components/shared/courses-sidebar"
import { Outlet } from "react-router-dom"

const CourseDashboard = () => {
  return (
    <div className="bg-[#111B35] h-full flex ">
        <CourseSidebar/>
        <Outlet/>
    </div>
  )
}

export default CourseDashboard