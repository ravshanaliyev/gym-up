import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { jwtDecode } from "jwt-decode"

const UserAccount = () => {
    const user = jwtDecode(localStorage.getItem('token')!)

    return (
        <div className="flex flex-col gap-6">
            <div>
                <form className="border rounded-xl p-5 shadow bg-white">
                    <h3 className="text-xl">Personal Information</h3>
                    <p className="text-sm">Details about your personal information</p>
                    <hr className="my-5" />
                    <div className="block md:flex gap-6 my-6">
                        <div className="w-full md:w-1/2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="text"
                                // @ts-ignore
                                defaultValue={user.Phone} />
                        </div>
                    </div>
                    <div className="block md:flex gap-6 my-6 ">
                        <div className="w-full md:w-1/2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName"
                                // @ts-ignore
                                defaultValue={user.FirstName} />
                        </div>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName"
                                // @ts-ignore
                                defaultValue={user.LastName} />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button variant={'outline'} >Save Changes</Button>
                    </div>
                </form>
            </div>
            <div>
                <form className="border rounded-xl p-5 shadow bg-white">
                    <h3 className="text-xl">Change Password</h3>
                    <p className="text-sm">Details about your account password change</p>
                    <hr className="my-5" />
                    <div className="block md:flex gap-6 my-6">
                        <div className="w-full md:w-1/3">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input type="password" placeholder="Current Password" id="currentPassword" />
                        </div>
                        <div className="w-full md:w-1/3 mt-4 md:mt-0">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input type="password" placeholder="New Password" id="newPassword" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit" variant={'outline'}>Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserAccount