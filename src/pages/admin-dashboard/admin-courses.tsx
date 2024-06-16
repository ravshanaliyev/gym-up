import { CourseType } from "@/@types/types"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { client } from "@/service/QueryClient"
import { useGetCourses } from "@/service/query/useGetCourses"
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useCreateCourse } from "@/service/mutation/useCreateCourse"
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import AdminCourseTr from "./admin-course-tr"


const AdminCourses = () => {
    const { toast } = useToast()
    const [search, setSearch] = useState("")
    const [AllCourses, setAllCourses] = useState<CourseType[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const { data: Courses } = useGetCourses()
    const [image, setImage] = useState(null)


    const { mutate } = useCreateCourse()

    function onSubmit(values: any) {
        const formData = new FormData()
        formData.append("title", values.title)
        formData.append("description", values.description)
        formData.append("image", image as any)
        mutate(formData, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-courses'] })
                setIsOpen(false)
                reset()
                toast({
                    title: "Course added successfully",
                    description: "You can add more courses",
                })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }



    // const filteredCourses = Courses?.data?.filter((course: CourseType) => {
    //     return course.title.toLowerCase().includes(search.toLowerCase())
    // })


    useEffect(() => {
        if (search.length > 0) {
            const searchedData = Courses?.data?.filter((course: CourseType) => course.title.toLowerCase().includes(search.toLowerCase()))
            setAllCourses(searchedData)
        }
        else {
            setAllCourses(Courses?.data)
        }
    }, [search, Courses])

    console.log(AllCourses);




    return (
        <>
            <div>
                <div className="flex justify-between items-center gap-4">
                    <Input onChange={(e) => setSearch(e.target.value)} className="max-w-[400px] h-[40px]" placeholder="Search Course" />
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger>
                            <Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white">Add Course</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <h3 className="text-lg text-center">Add Course</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input type="text" id="name" placeholder="Name" {...register("title", { required: true })} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="desc">Description</Label>
                                    <Input type="text" id="desc" placeholder="Description" {...register("description", { required: true })} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Image</Label>
                                    <Input type="file" id="name" placeholder="Name" onChange={(e) =>
                                        // @ts-ignore
                                        setImage(e.target.files[0])} required />
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
                                AllCourses?.map((course: CourseType, index: number) => (
                                    <AdminCourseTr course={course} key={index} />
                                ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default AdminCourses