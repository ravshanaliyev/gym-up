import { useGetSingleCourse } from "@/service/query/useGetSingleCourse"
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { useUpdateCourse } from "@/service/mutation/useUpdateCourse"
import { client } from "@/service/QueryClient"
import { useToast } from "../ui/use-toast"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { CourseType } from "@/@types/types"

const UpdateCourse = ({ course, }: { course: CourseType, }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { toast } = useToast()
    const { handleSubmit, register, reset } = useForm()
    const { mutate: updateCourse } = useUpdateCourse()
    const { id } = course
    function onUpdateSubmit(values: any) {
        updateCourse({ ...values, id }, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-courses'] })
                setIsOpen(false)
                reset()
                toast({
                    title: "Course updated successfully",
                    description: "You can add more courses",
                })
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
                    <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Pencil className="h-4 w-4" /></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    {
                        course && (
                            <>
                                <h3 className="text-lg text-center">Update Course</h3>
                                <form onSubmit={handleSubmit(onUpdateSubmit)} className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input type="text" id="name" defaultValue={course && course?.title} {...register("title")} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="desc">Description</Label>
                                        <Input type="text" id="desc" defaultValue={course && course?.description} {...register("description")} />
                                    </div>
                                    <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                                </form>
                            </>
                        )
                    }
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateCourse