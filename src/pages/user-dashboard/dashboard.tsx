import UserHeader from "./_components/user-header"
import UserSidebar from "./_components/user-sidebar"

const UserDashboard = () => {
    return (
        <div className="flex">
            <UserSidebar />
            <div className="lg:ml-[320px] w-full">
                <UserHeader />
            </div>
        </div>
    )
}

export default UserDashboard