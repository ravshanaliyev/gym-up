import { CourseType } from "@/@types/types"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { client } from "@/service/QueryClient"
import { useDeleteCourse } from "@/service/mutation/useDeleteCourse"
import { useGetCourses } from "@/service/query/useGetCourses"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

const AdminCourses = () => {
    const { data: AllCourses } = useGetCourses()
    console.log(AllCourses);
    const { mutate } = useDeleteCourse()
    const deleteCourse = (id: number) => {
        mutate(id, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-courses'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">My Courses</h3>
                <Link to="/admin/add-course"><Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white">Add Course</Button></Link>
            </div>
            <div className="my-6">
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Total Lessons</TableHead>
                            <TableHead>Total Sold</TableHead>
                            <TableHead className="text-center">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            AllCourses?.data.map((course: CourseType, index: number) => (
                                <TableRow key={index}>
                                    <TableCell><Link to={`${course.id}`}><img className="w-24" src={'https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75'} alt="" /></Link></TableCell>
                                    <TableCell><Link to={`${course.id}`}>{course.title}</Link></TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <div className="flex gap-2 items-center justify-center">
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Eye className="h-[18px] w-[18px]" /></Button>
                                            <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Pencil className="h-4 w-4" /></Button>
                                            <Button onClick={() => deleteCourse(course.id)} className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Trash2 className="h-4 w-4" /></Button>
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

export default AdminCourses