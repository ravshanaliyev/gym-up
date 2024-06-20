import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const UserSidebarItem = ({ icon: Icon, label, path }: { icon?: any, label: string, path: string }) => {
    const { pathname } = useLocation()
    const isActive = pathname === path;
    console.log(pathname);
    console.log(path);


    return (
        <div>
            <div
                className={cn(
                    "flex items-center justify-between transition rounded-md  px-4 py-2 cursor-pointer text-white",
                    isActive && "bg-[#333A48]"
                )}
            >
                <div className="flex items-center">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="pl-2 text-md opacity-75">{label}</span>
                </div>
            </div>
        </div>
    )
}

export default UserSidebarItem