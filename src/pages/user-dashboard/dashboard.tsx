import { Outlet, useNavigate, useParams } from "react-router-dom"
import UserHeader from "./_components/user-header"
import UserSidebar from "./_components/user-sidebar"
import { useEffect } from "react"

const UserDashboard = () => {
    const { pathname } = useParams()
    const navigate = useNavigate()

    const token = localStorage.getItem("token")
    // const tokenAdmin: any = localStorage.getItem("token") && jwtDecode(localStorage.getItem("token")!)

    // const role: any = tokenAdmin && tokenAdmin["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]


    useEffect(() => {
        token ? navigate("/user-dashboard") : navigate("/auth/login")
    }, [token, pathname])
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