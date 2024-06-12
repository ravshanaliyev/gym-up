import UserPasswordUpdate from "@/components/shared/user-password-update"
import UserUpdate from "@/components/shared/user-update"
import { useToast } from "@/components/ui/use-toast"
import { useUpdatePassword } from "@/service/mutation/useUpdatePassword"
import { useUpdateUser } from "@/service/mutation/useUpdateUser"
import { useGetUser } from "@/service/query/useGetUser"
import { jwtDecode } from "jwt-decode"

const Settings = () => {
    const { toast } = useToast()
    const token = localStorage.getItem('token')
    const user: any = token && jwtDecode(token!)
    const { mutate, isPending } = useUpdateUser()
    const { mutate: mutatePass } = useUpdatePassword()
    const { data, isLoading } = useGetUser(user.Id)
    const onSubmit = (data: any) => {
        mutate({ ...data, id: Number(user.Id), isPayed: true }, {
            onSuccess: (res) => {
                console.log(res);
                toast({
                    title: 'Success',
                    description: 'User updated successfully',
                })
            },
            onError: (error) => {
                console.log(error);
                toast({
                    title: 'Error',
                    description: error.message,
                })
            }
        })
    }
    const onSubmitPassword = (values: any) => {
        const { oldPass, newPass } = values
        mutatePass({ oldPass, newPass }, {
            onSuccess: (res) => {
                console.log(res);
                toast({
                    title: 'Success',
                    description: 'Password updated successfully',
                })
            },
            onError: (error) => {
                console.log(error);
                toast({
                    title: 'Error',
                    description: error.message,
                })
            }
        })
    }
    return (
        <div>
            <div className="flex flex-col gap-6">
                {
                    isLoading ? <h3>Loading...</h3> : (
                        <UserUpdate submit={onSubmit} data={data} isPending={isPending} />
                    )
                }
                <UserPasswordUpdate onSubmitPassword={onSubmitPassword} />
            </div>
        </div>
    )
}

export default Settings