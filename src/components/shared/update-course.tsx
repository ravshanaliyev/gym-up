import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUpdateCourse } from "@/service/mutation/useUpdateCourse";
import { client } from "@/service/QueryClient";
import { Pencil } from "lucide-react";
import { CourseType } from "@/@types/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UpdateCourse = ({ course, isOpen, setIsOpen }: { course: CourseType, isOpen: boolean, setIsOpen: Function }) => {
    console.log(isOpen);

    const { mutate: updateCourse } = useUpdateCourse();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState('')

    useEffect(() => {
        setTitle(course.title)
        setDescription(course.description)
        setImage(course.image)
    }, [course])

    const { id } = course;
    const updatedCourse = { id, title, description, image }

    const handleUpdateCourse = (e: Event) => {
        e.preventDefault()
        console.log(updatedCourse);
        updateCourse(updatedCourse, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-courses'] });
                setIsOpen(false);
                toast('Course updated successfully');
            },
            onError: (error) => {
                console.log(error);
                toast('There was an error', {
                    description: error.message,
                });
            }
        })
    }

    return (
        <div style={isOpen ? { display: 'none' } : { display: 'none' }}>
            <Dialog open={isOpen} onOpenChange={setIsOpen as any}>
                <DialogTrigger asChild>
                    <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size="icon">
                        <Pencil className="h-4 w-4" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <h3 className="text-lg text-center">Update Course</h3>
                    <form onSubmit={handleUpdateCourse as any} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="title">Name</Label>
                            <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value.trimStart())} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value.trimStart())} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Image</Label>
                            <Input type="file" id="name" onChange={(e) =>
                                // @ts-ignore
                                setImage(e.target.files[0])} />
                        </div>
                        <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateCourse;
