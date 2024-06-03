import { CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";
import UserSidebarItem from "./user-sidebar-item";
import { Progress } from "@/components/ui/progress";

const UserSidebar = () => {
    return (
        <div>
            <div className="w-0 hidden lg:block md:w-[320px] barlow fixed bg-[#1c2434] overflow-y-scroll  h-screen pt-4 px-4">
                <h3 className="text-white text-center text-xl barlow font-semibold">ABS Beginner</h3>
                <Progress value={20} className="w-full my-2 bg-[#333A48] " />
                <div className="flex flex-col space-y-6 mt-8">
                    {sidebarLinks.map((link) => (
                        <Link to={link.path} key={link.path}>
                            <UserSidebarItem icon={link.icon} label={link.label} path={link.path} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserSidebar


const sidebarLinks = [
    {
        label: "Jumping Jacks",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Abdominal Crunches",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Russian Twists",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Mountain Climbers",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Plank",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Heel Touch",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Leg Lifts",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
    {
        label: "Arm Raises",
        icon: CirclePlay,
        path: "/user-dashboard",
    },
];