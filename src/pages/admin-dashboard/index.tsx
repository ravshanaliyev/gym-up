import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AdminHeader, AdminSidebar } from "@/components";

const AdminDashboard = () => {
    const { pathname } = useParams()
    const navigate = useNavigate()

    const tokenAdmin: any = localStorage.getItem("token") && jwtDecode(localStorage.getItem("token")!)

    const role: any = tokenAdmin && tokenAdmin["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    console.log(role);
    
    useEffect(() => {
        // tokenAdmin === null && navigate("/auth/login")
        // role === "Admin" && tokenAdmin?.IsPayed === "True" ? navigate("/admin/courses") : navigate("/auth/login")
        role === "User" && navigate("/")

        if (tokenAdmin === null) {
            navigate("/auth/login")
        } else if (role === "Admin") {
            navigate("/admin/courses")
        }
    }, [pathname])

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
