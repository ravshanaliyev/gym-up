import { Outlet, useNavigate, useParams } from "react-router-dom"
import UserHeader from "./_components/user-header"
import UserSidebar from "./_components/user-sidebar"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"

const UserDashboard = () => {
    const { pathname } = useParams()
    const navigate = useNavigate()

    const token: string | null = localStorage.getItem("token")


    const tokenAdmin: any = token && jwtDecode(token)

    const role: any = token && tokenAdmin["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]


    useEffect(() => {
        role === "Admin" ? navigate("/user-dashboard") : navigate("/auth/login")
    }, [pathname, token])
    return (
        <div className="flex">
            <UserSidebar />
            <div className="lg:ml-[320px] w-full">
                <UserHeader />
                <div className="w-full bg-[#F1F5F9] p-8 h-[calc(100vh-80px)] overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserDashboard