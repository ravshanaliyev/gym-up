import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'

const UserUpdate = ({ data, submit, isPending }: { data: any, submit: any, isPending: boolean }) => {
    const { register, handleSubmit } = useForm()
    return (
        <div>
            <form onSubmit={handleSubmit(submit)} className="border rounded-xl p-5 shadow bg-white">
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
                    <Button variant={'outline'} disabled={isPending}>Save Changes</Button>
                </div>
            </form>
        </div>
    )
}

export default UserUpdate