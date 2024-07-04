import { Settings, Computer, UserRound, Users, Images } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { SquareMenu } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Sheet, SheetClose, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import AdminSidebarItem from './admin-sidebar-item'
import { jwtDecode } from "jwt-decode";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
const AdminHeader = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/auth/login")
    }
    const user = localStorage.getItem("token") && jwtDecode(localStorage.getItem("token")!)

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
                                <SheetClose asChild key={link.path}>
                                    <Link to={link.path} >
                                        <AdminSidebarItem icon={link.icon} label={link.label} path={link.path} />
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            {/* <Input className='hidden md:block md:w-[300px] text-base' placeholder='Type To Search' /> */}
            <div></div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild >
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className='flex flex-col items-end'>
                            <h4 className='text-[14px] font-semibold'>{
                                //@ts-ignore
                                user?.FirstName} {user?.LastName}</h4>
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
                                Courses
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to={'/admin/users'}>
                            <DropdownMenuItem className='cursor-pointer'>
                                Users
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </Link>
                        <Link to={'/admin/gallery'}>
                            <DropdownMenuItem className='cursor-pointer'>
                                Gallery
                                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
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
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            {/* <Button className="w-full" size={'sm'}>
                                Log out
                            </Button> */}
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()} className='cursor-pointer'>
                                Log out
                                <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleLogout()}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
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
        label: "Users",
        icon: Users,
        path: "/admin/users",
    },
    {
        label: "Gallery",
        icon: Images,
        path: "/admin/gallery",
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