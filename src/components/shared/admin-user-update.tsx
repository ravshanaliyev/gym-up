import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Pencil } from "lucide-react"
import { useUpdateUser } from "@/service/mutation/useUpdateUser"
import { client } from "@/service/QueryClient"

const AdminUserUpdate = ({ user }: { user: any }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [isPayed, setIsPayed] = useState<boolean>(false)
    const { mutate } = useUpdateUser()
    useEffect(() => {
        setFirstName(user.firstname)
        setLastName(user.lastname)
        setPhone(user.phone)
        setIsPayed(user.isPayed)
    }, [user])

    const updateUser = { firstName, lastName, phone, isPayed, id: user.id }
    const onSubmit = (e: any) => {
        e.preventDefault()
        mutate(updateUser, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-users'] })
                setIsOpen(false)
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger>
                    <div className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white flex items-center justify-center rounded-md"><Pencil className="h-4 w-4" /></div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <h3 className="text-lg text-center">Update User</h3>
                    <form onSubmit={onSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="ispayed">Is Payed</Label>
                            {/* <Input type="text" id="ispayed" value={isPayed} /> */}
                            <Switch id="ispayed" checked={isPayed} onCheckedChange={setIsPayed} />
                        </div>
                        <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AdminUserUpdate