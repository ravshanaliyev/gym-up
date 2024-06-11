import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUpdatePassword } from "@/service/mutation/useUpdatePassword"
import { useUpdateUser } from "@/service/mutation/useUpdateUser"
import { useGetUser } from "@/service/query/useGetUser"
import { jwtDecode } from "jwt-decode"
import { useForm } from "react-hook-form"

const Settings = () => {
    const token = localStorage.getItem('token')
    const user: any = token && jwtDecode(token!)
    const { register, handleSubmit } = useForm()
    const { mutate, isPending } = useUpdateUser()
    const { mutate: mutatePass } = useUpdatePassword()
    const { data, isLoading } = useGetUser(user.Id)
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
    const onSubmitPassword = (values: any) => {
        mutatePass({ id: Number(user.Id), oldPass: values.oldPass, newPass: values.newPass }, {
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
                {
                    isLoading ? <h3>Loading...</h3> : (
                        <form onSubmit={handleSubmit(onSubmit)} className="border rounded-xl p-5 shadow bg-white">
                            <h3 className="text-xl">Personal Information</h3>
                            <p className="text-sm">Details about your personal information</p>
                            <hr className="my-5" />
                            <div className="block md:flex gap-6 my-6">
                                <div className="w-full md:w-1/2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input {...register('phone')} id="phone" type="text" defaultValue={data?.data?.phone} />
                                </div>
                            </div>
                            <div className="block md:flex gap-6 my-6 ">
                                <div className="w-full md:w-1/2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input {...register('firstName')} defaultValue={data?.data?.firstname} id="firstName" />
                                </div>
                                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input {...register('lastName')} defaultValue={data?.data?.lastname} id="lastName" />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button variant={'outline'} type="submit" disabled={isPending}>Save Changes</Button>
                            </div>
                        </form>
                    )
                }
                <form onSubmit={handleSubmit(onSubmitPassword)} className="border rounded-xl p-5 shadow bg-white">
                    <h3 className="text-xl">Change Password</h3>
                    <p className="text-sm">Details about your account password change</p>
                    <hr className="my-5" />
                    <div className="block md:flex gap-6 my-6">
                        <div className="w-full md:w-1/3">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input {...register('oldPass')} type="password" placeholder="Current Password" id="currentPassword" />
                        </div>
                        <div className="w-full md:w-1/3 mt-4 md:mt-0">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input {...register('newPass')} type="password" placeholder="New Password" id="newPassword" />
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

export default Settings