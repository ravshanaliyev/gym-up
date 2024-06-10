import AdminHeader from "@/components/shared/admin-header";
import AdminSidebar from "@/components/shared/admin-sidebar";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminDashboard = () => {
    const { pathname } = useParams()
    const navigate = useNavigate()

    const token: string | null = localStorage.getItem("token")


    const tokenAdmin: any = token && jwtDecode(token)
   
    const role: any = token && tokenAdmin["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]


    useEffect(() => {
        role === "Admin" ? navigate("/admin/courses") : navigate("/auth/login")
    }, [pathname, token])

    return (
        <div className="w-full">
            <div className="block md:flex">
                <AdminSidebar />
                <div className="lg:ml-[280px] w-full">
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
