import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUpdateUser } from "@/service/mutation/useUpdateUser"
import { jwtDecode } from "jwt-decode"
import { useForm } from "react-hook-form"

const Settings = () => {
    const token = localStorage.getItem('token')
    const user: any = token && jwtDecode(token!)
    const { register, handleSubmit } = useForm()
    const { mutate, isPending } = useUpdateUser()
    const onSubmit = (data: any) => {
        // const formdata = new FormData()
        // formdata.append('id', user.Id)
        // formdata.append('firstname', data.firstName)
        // formdata.append('lastname', data.lastName)
        // formdata.append('phone', data.phone)
        // formdata.append('isPayed', true)
        mutate({ ...data, id: Number(user.Id), isPayed: true }, {
            onSuccess: (res) => {
                console.log(res);
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <div>
            <div className="flex flex-col gap-6">
                <form onSubmit={handleSubmit(onSubmit)} className="border rounded-xl p-5 shadow bg-white">
                    <h3 className="text-xl">Personal Information</h3>
                    <p className="text-sm">Details about your personal information</p>
                    <hr className="my-5" />
                    <div className="block md:flex gap-6 my-6">
                        <div className="w-full md:w-1/2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input {...register('phone')} id="phone" type="text" defaultValue={user.Phone} />
                        </div>
                    </div>
                    <div className="block md:flex gap-6 my-6 ">
                        <div className="w-full md:w-1/2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input {...register('firstName')} defaultValue={user.FirstName} id="firstName" />
                        </div>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input {...register('lastName')} defaultValue={user.LastName} id="lastName" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button variant={'ghost'} type="submit">Save Changes</Button>
                    </div>
                </form>
                <div className="border rounded-xl p-5 shadow bg-white">
                    <h3 className="text-xl">Change Password</h3>
                    <p className="text-sm">Details about your account password change</p>
                    <hr className="my-5" />
                    <div className="block md:flex gap-6 my-6">
                        <div className="w-full md:w-1/3">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input placeholder="Current Password" id="currentPassword" />
                        </div>
                        <div className="w-full md:w-1/3 mt-4 md:mt-0">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input placeholder="New Password" id="newPassword" />
                        </div>
                        <div className="w-full md:w-1/3 mt-4 md:mt-0">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input placeholder="Confirm Password" id="confirmPassword" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button variant={'ghost'}>Save Changes</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings