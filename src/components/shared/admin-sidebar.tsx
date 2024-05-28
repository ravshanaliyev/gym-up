import { BadgePlus, Settings, Computer, Home, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import AdminSidebarItem from "./admin-sidebar-item";

const AdminSidebar = () => {

    return (
        <div className="w-[280px] barlow fixed bg-[#1c2434]  h-screen pt-10 px-4">
            <h3 className="text-white text-center text-xl barlow font-semibold">Gym Up Admin</h3>
            <div className="flex flex-col space-y-6 mt-8">
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
        label: "Add Course",
        icon: BadgePlus,
        path: "/admin/add-course",
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