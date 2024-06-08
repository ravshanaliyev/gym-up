import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const AdminSidebarItem = ({ icon: Icon, label, path }: { icon: any, label: string, path: string }) => {
    const { pathname } = useLocation()
    const isActive = pathname === path;
    return (
        <div
            className={cn(
                "flex items-center transition rounded-md  px-4 py-[10px] cursor-pointer text-white",
                isActive && "bg-[#333A48]"
            )}
        >
            <Icon className="w-5 h-5" />
            <span className="pl-2 text-md opacity-75">{label}</span>
        </div>
    );

}

export default AdminSidebarItem 