import { CirclePlay, User } from "lucide-react";
import { Link } from "react-router-dom";
import UserSidebarItem from "./user-sidebar-item";
import { useGetCourses } from "@/service/query/useGetCourses";
import { jwtDecode } from "jwt-decode";

const UserSidebar = () => {
    const { data } = useGetCourses()
    const token: any = localStorage.getItem("token") && jwtDecode(localStorage.getItem("token")!)

    const role = token && token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

    return (
        <div>
            <div className="w-0 hidden lg:block md:w-[320px] barlow fixed bg-[#1c2434] overflow-y-scroll  h-screen pt-4 px-4">
                <div className="flex flex-col space-y-4 mt-8">
                    {
                        role === "Admin" && <h3 className="text-white font-bold text-[18px] text-center">Courses</h3>
                    }
                    {role === "Admin" && data?.data.map((link: any) => (
                        <Link to={`/user-dashboard/courses/${link.id}`} key={link.id}>
                            <UserSidebarItem icon={CirclePlay} label={link.title} path={`/user-dashboard/courses/${link.id}`} />
                        </Link>
                    ))}
                    <h3 className="text-white font-bold text-[18px] text-center">Account</h3>
                    <Link to="/user-dashboard/account">
                        <UserSidebarItem icon={User} label="Account" path="/user-dashboard/account" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserSidebar
