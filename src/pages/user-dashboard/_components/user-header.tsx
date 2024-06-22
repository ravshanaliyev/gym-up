import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CirclePlay, SquareMenu, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import UserSidebarItem from "./user-sidebar-item"
import { useGetCourses } from "@/service/query/useGetCourses"
import { jwtDecode } from "jwt-decode"


const UserHeader = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/auth/login")
    }
    const user = jwtDecode(localStorage.getItem("token")!)

    const { data } = useGetCourses()
    return (
        <div className='w-full h-[80px] shadow-md flex items-center barlow bg-white  justify-between px-8'>
            <div className='flex items-center gap-2 lg:hidden '>
                <Sheet>
                    <SheetTrigger>
                        <SquareMenu className='cursor-pointer block lg:hidden' />
                    </SheetTrigger>
                    <SheetContent side={'left'} className='bg-[#1c2434] text-white'>
                        <div className="flex flex-col space-y-4 mt-8">
                            <h3 className="text-white font-bold text-[16px] text-center">Courses</h3>
                            {data?.data.map((link: any) => (
                                <SheetClose asChild key={link.id}>
                                    <Link to={`/user-dashboard/courses/${link.id}`}>
                                        <UserSidebarItem icon={CirclePlay} label={link.title} path={`/user-dashboard/courses/${link.id}`} />
                                    </Link>
                                </SheetClose>
                            ))}
                            <h3 className="text-white font-bold text-[16px] text-center">Account</h3>
                            <SheetClose asChild>
                                <Link to="/user-dashboard/account">
                                    <UserSidebarItem icon={User} label="Account" path="/user-dashboard/account" />
                                </Link>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
                <h3 className="text-black text-center text-xl barlow font-semibold">Gym Up</h3>
            </div>
            <h3 className="hidden lg:block text-black text-center text-xl barlow font-semibold">Gym Up</h3>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className='flex flex-col items-end'>
                            <h4 className='text-[14px] font-semibold'>
                                {
                                    //@ts-ignore
                                    user.FirstName} {user.LastName}</h4>
                            <p className='text-[12px] font-medium'>User</p>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link to={'/user-dashboard/account'}>
                        <DropdownMenuItem>
                            Account
                            <DropdownMenuShortcut>⇧⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserHeader