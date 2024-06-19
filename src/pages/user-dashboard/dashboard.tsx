import { Outlet } from "react-router-dom"
import UserHeader from "./_components/user-header"
import UserSidebar from "./_components/user-sidebar"

const UserDashboard = () => {
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