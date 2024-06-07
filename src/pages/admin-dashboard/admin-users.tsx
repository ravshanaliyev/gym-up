import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { useGetUsers } from "@/service/query/useGetUsers"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useCreateUser } from "@/service/mutation/useCreateUser"
import { client } from "@/service/QueryClient"
import { useState } from "react"
import { useDeleteUser } from "@/service/mutation/useDeleteUser"
const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
    phone: z.any(),
    password: z.any(),
})

const AdminUsers = () => {
    const { data } = useGetUsers()
    const [search, setSearch] = useState("")
    const { mutate } = useCreateUser()
    const { mutate: delUser } = useDeleteUser()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            phone: 0,
            password: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-users'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    const filteredData = data?.data?.filter((course: any) => {
        return course.firstname.toLowerCase().includes(search.toLowerCase())
    })

    const handleDelUser = (id: number) => {
        delUser(id, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-users'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <div>
            <div className="flex items-center justify-between py-3 border-b-2">
                <Input onChange={(e) => setSearch(e.target.value)} className="max-w-[400px] h-[40px]" placeholder="Search User" />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Add User</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <DialogHeader>
                                    <DialogTitle className="text-center my-2">Create User</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <FormField
                                        control={form.control}
                                        name="firstname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input className="text-base" placeholder="john" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input className="text-base" placeholder="doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input className="text-base" placeholder="+998987654321" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" className="text-base" placeholder="******" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <DialogFooter>
                                    <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Save changes</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="my-6">
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Phone No</TableHead>
                            <TableHead>Payed</TableHead>
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            filteredData?.map((course: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{course?.firstname}</TableCell>
                                    <TableCell><Link to={`${course.id}`}>{course?.lastname}</Link></TableCell>
                                    <TableCell>{course?.phone}</TableCell>
                                    <TableCell>{course?.isPayed ? "Yes" : "No"}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2 items-center justify-center">
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Eye className="h-[18px] w-[18px]" /></Button>
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Pencil className="h-4 w-4" /></Button>
                                            <Button onClick={() => handleDelUser(course.id)} className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AdminUsers