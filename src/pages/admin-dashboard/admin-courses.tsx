import { CourseType } from "@/@types/types"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { client } from "@/service/QueryClient"
import { useDeleteCourse } from "@/service/mutation/useDeleteCourse"
import { useGetCourses } from "@/service/query/useGetCourses"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useCreateCourse } from "@/service/mutation/useCreateCourse"
import { useState } from "react"

const AdminCourses = () => {
    const [search, setSearch] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit } = useForm()
    const { data: AllCourses } = useGetCourses()
    const { mutate } = useCreateCourse()
    console.log(AllCourses);
    const { mutate: delCourse } = useDeleteCourse()
    function onSubmit(values: any) {
        mutate(values, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-courses'] })
                setIsOpen(false)
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    const deleteCourse = (id: number) => {
        delCourse(id, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-courses'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    const filteredCourses = AllCourses?.data?.filter((course: CourseType) => {
        return course.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <Input onChange={(e) => setSearch(e.target.value)} className="max-w-[400px] h-[40px]" placeholder="Search Course" />
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger>
                            <Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white">Add Course</Button>                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <h3 className="text-lg text-center">Add Course</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name" placeholder="Name" {...register("title")} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="desc">Description</Label>
                                    <Input type="text" id="desc" placeholder="Description" {...register("description")} />
                                </div>
                                <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="my-6">
                    <Table className="">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                filteredCourses?.map((course: CourseType, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell><Link to={`${course.id}`}><img className="w-24" src={'https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png'} alt="" /></Link></TableCell>
                                        <TableCell><Link className="text-base font-semibold" to={`${course.id}`}>{course.title}</Link></TableCell>
                                        <TableCell>{course.description}</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2 items-center justify-center">
                                                <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Eye className="h-[18px] w-[18px]" /></Button>
                                                <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Pencil className="h-4 w-4" /></Button>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Trash2 className="h-4 w-4" /></Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete your
                                                                account and remove your data from our servers.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" onClick={() => deleteCourse(course.id)}>Continue</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default AdminCourses