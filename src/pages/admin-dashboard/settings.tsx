import { UserPasswordUpdate, UserUpdate } from "@/components"
import { useGetUser, useUpdatePassword, useUpdateUser } from "@/service"
import { jwtDecode } from "jwt-decode"
import { toast } from "sonner"

const Settings = () => {
    const token = localStorage.getItem('token')
    const user: any = token && jwtDecode(token!)
    const { mutate, isPending } = useUpdateUser()
    const { mutate: mutatePass } = useUpdatePassword()
    const { data, isLoading } = useGetUser(user?.Id)
    const onSubmit = (data: any) => {
        mutate({ ...data, id: Number(user?.Id), isPayed: true }, {
            onSuccess: () => {
                toast("Profile updated successfully", {
                    description: 'User updated successfully',
                })
            },
            onError: (error) => {
                toast("Profile not updated", {
                    description: error.message,
                })
            }
        })
    }
    const onSubmitPassword = (values: any) => {
        const { oldPass, newPass } = values
        mutatePass({ oldPass, newPass }, {
            onSuccess: () => {
                toast("Password updated successfully", {
                    description: 'Password updated successfully',
                })
            },
            onError: (error) => {
                toast("There was an error", {
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