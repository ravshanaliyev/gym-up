import AdminHeader from "@/components/shared/admin-header";
import AdminSidebar from "@/components/shared/admin-sidebar";
import { Outlet } from "react-router-dom";
const AdminDashboard = () => {
    return (
        <div className="w-full">
            <div className="flex w-full">
                <AdminSidebar />
                <div className="ml-[280px] w-full">
                    <AdminHeader />
                    <div className="w-full bg-[#F1F5F9] p-8 h-[calc(100vh-80px)] overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
