import { CirclePlay, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import UserSidebarItem from "./user-sidebar-item";
import { useGetCourses } from "@/service/query/useGetCourses";

const UserSidebar = () => {
    const { data } = useGetCourses()
    console.log(data);

    return (
        <div>
            <div className="w-0 hidden lg:block md:w-[320px] barlow fixed bg-[#1c2434] overflow-y-scroll  h-screen pt-4 px-4">
                <div className="flex flex-col space-y-4 mt-8">
                    <h3 className="text-white font-bold text-[18px] text-center">Courses</h3>
                    {data?.data.map((link: any) => (
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
