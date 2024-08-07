import { Settings, Computer, UserRound, Users, Images } from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebarItem from "./admin-sidebar-item";

const AdminSidebar = () => {
    return (
        <div className="w-0 hidden lg:block md:w-[280px] barlow fixed bg-[#1c2434]  h-screen pt-10 px-4">
            <Link to={'/'}>
                <h3 className="text-white text-center text-xl barlow font-semibold">Gym Up Admin</h3>
            </Link>
            <div className="flex flex-col space-y-3 mt-8">
                {sidebarLinks.map((link) => (
                    <Link to={link.path} key={link.path}>
                        <AdminSidebarItem icon={link.icon} label={link.label} path={link.path} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AdminSidebar


const sidebarLinks = [
    {
        label: "Courses",
        icon: Computer,
        path: "/admin/courses",
    },
    {
        label: "Users",
        icon: Users,
        path: "/admin/users",
    },
    {
        label: "Gallery",
        icon: Images,
        path: "/admin/gallery",
    },
    {
        label: "Profile",
        icon: UserRound,
        path: "/admin/profile",
    },
    {
        label: "Settings",
        icon: Settings,
        path: "/admin/settings",
    },
];