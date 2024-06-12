import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'

const UserPasswordUpdate = ({ onSubmitPassword }: { onSubmitPassword: any }) => {
    const { register, handleSubmit } = useForm()
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitPassword)} className="border rounded-xl p-5 shadow bg-white">
                <h3 className="text-xl">Change Password</h3>
                <p className="text-sm">Details about your account password change</p>
                <hr className="my-5" />
                <div className="block md:flex gap-6 my-6">
                    <div className="w-full md:w-1/3">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input {...register('oldPass', { required: true })} type="text" placeholder="Current Password" id="currentPassword" />
                    </div>
                    <div className="w-full md:w-1/3 mt-4 md:mt-0">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input {...register('newPass', { required: true })} type="text" placeholder="New Password" id="newPassword" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit" variant={'outline'}>Save Changes</Button>
                </div>
            </form>
        </div>
    )
}

export default UserPasswordUpdate