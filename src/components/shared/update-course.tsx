import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useUpdateCourse } from "@/service/mutation/useUpdateCourse";
import { client } from "@/service/QueryClient";
import { useToast } from "../ui/use-toast";
import { Pencil } from "lucide-react";
import { CourseType } from "@/@types/types";
import { useEffect, useState } from "react";

const UpdateCourse = ({ course, isOpen, setIsOpen }: { course: CourseType, isOpen: boolean, setIsOpen: Function }) => {
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const { toast } = useToast();
    const { handleSubmit, register, reset } = useForm();
    const { mutate: updateCourse } = useUpdateCourse();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    useEffect(() => {
        setTitle(course.title)
        setDescription(course.description)
    }, [course])

    const { id } = course;
    const updatedCourse = {id, title, description}

    const onUpdateSubmit = (value: any) => {
        updateCourse({ ...value, id }, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-courses'] });
                setIsOpen(false);
                reset()
                toast({
                    title: "Course updated successfully",
                    description: "You can add more courses",
                });
            },
            onError: (error) => {
                console.log(error);
            }
        });
    };


    const handleUpdateCourse = (e: Event) => {
        e.preventDefault()
        updateCourse(updatedCourse, {
            onSuccess:(res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-courses'] });
                setIsOpen(false);
            },
            onError: (error) => {
                console.log(error);
                
            }
        })
    }

    return (
        <div style={ isOpen ?{display: 'none'} : {display: 'none'}}>
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
                            <Input type="text" id="title" value={title}   onChange={(e) => setTitle(e.target.value)}  />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default UpdateCourse;
