import { Input } from '../ui/input'
import { BadgePlus, Settings, Computer, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { SquareMenu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import AdminSidebarItem from './admin-sidebar-item'


const AdminHeader = () => {
    return (
        <div className='w-full h-[80px] shadow-xl flex items-center barlow bg-white justify-between px-8'>
            <div className='flex items-center lg:hidden '>
                <Sheet>
                    <SheetTrigger>
                        <SquareMenu className='cursor-pointer block lg:hidden' />
                    </SheetTrigger>
                    <SheetContent side={'left'} className='bg-[#1c2434] text-white'>
                        <h3 className="text-white text-center text-xl barlow font-semibold">Gym Up Admin</h3>
                        <div className="flex flex-col space-y-6 mt-8">
                            {sidebarLinks.map((link) => (
                                <Link to={link.path} key={link.path}>
                                    <AdminSidebarItem  label={link.label} path={link.path} />
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <Input className='hidden md:block md:w-[300px] text-base' placeholder='Type To Search' />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className='flex flex-col items-end'>
                            <h4 className='text-[14px] font-semibold'>Thomas Anree</h4>
                            <p className='text-[12px] font-medium'>Trainer</p>
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
                    <DropdownMenuGroup>
                        <Link to={'/admin/profile'}>
                            <DropdownMenuItem className='cursor-pointer'>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to={'/admin/courses'}>
                            <DropdownMenuItem className='cursor-pointer'>
                                My Courses
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to={'/admin/add-course'}>
                            <DropdownMenuItem className='cursor-pointer'>
                                Add Course
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to={'/admin/settings'}>
                            <DropdownMenuItem className='cursor-pointer'>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default AdminHeader



const sidebarLinks = [
    {
        label: "Courses",
        icon: Computer,
        path: "/admin/courses",
    },
    {
        label: "Add Course",
        icon: BadgePlus,
        path: "/admin/add-course",
    },
    {
        label: "Profile",
        icon: UserRound,
        path: "/admin/profile",
    },
    {
        label: "Settings",
        icon: Settings,
        path: "/admin/settings",
    },
];