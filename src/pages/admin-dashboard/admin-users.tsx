import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { useGetUsers } from "@/service/query/useGetUsers"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

const AdminUsers = () => {
    const { data } = useGetUsers()
    console.log(data);

    return (
        <div>
            <div className="flex items-center justify-between py-3 border-b-2">
                <Input className="max-w-[400px] h-[40px]" placeholder="Search User" />
                <Button className="bg-[#3c50e0] h-[40px] hover:bg-[#5162e2]">Add User</Button>
            </div>
            <div className="my-6">
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Phone No</TableHead>
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data?.data.map((course: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{course?.first_name}</TableCell>
                                    <TableCell><Link to={`${course.id}`}>{course?.last_name}</Link></TableCell>
                                    <TableCell>{course?.phone}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2 items-center justify-center">
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Eye className="h-[18px] w-[18px]" /></Button>
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Pencil className="h-4 w-4" /></Button>
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Trash2 className="h-4 w-4" /></Button>
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