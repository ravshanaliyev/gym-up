import { VideoType } from "@/@types/types";
import { useGetCourseVideos } from "@/service/query/useGetCourseVideos";
import VideoCard from "@/utils/VideoCard";
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateVideo } from "@/service/mutation/useCreateVideo";
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

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),

    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),

    video: z.any(),

    courseId: z.string(),

    teacher: z.string(),
})


const CourseVideos = () => {
    const { id } = useParams()

    const { data } = useGetCourseVideos(id)
    const { mutate } = useCreateVideo()
    console.log(data?.data?.data);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            courseId: id!,
            teacher: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("description", values.description)
        formData.append("video", values.video)
        formData.append("courseId", values.courseId)
        formData.append("teacher", values.teacher)

        mutate(formData, {
            onSuccess: (res) => {
                console.log(res);
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <>
            <div className="flex justify-between border-b border-gray-400 pb-[1rem]">
                <Input className="max-w-[400px] h-[40px]" placeholder="Search Video" />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Add Video</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <DialogHeader>
                                    <DialogTitle>Add Video</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel> Title</FormLabel>
                                                <FormControl>
                                                    <Input className="text-base" placeholder="example: gym for beginners" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="teacher"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Teacher</FormLabel>
                                                <FormControl>
                                                    <Input className="text-base" placeholder="example: gym for beginners" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Description</FormLabel>
                                                <FormControl>
                                                    <Input className="text-base" placeholder="example: gym for beginners" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="video"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Video</FormLabel>
                                                <FormControl>
                                                    <Input type="file" className="text-base" placeholder="example: gym for beginners" {...field} />
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
            <div className="w-full grid grid-cols-3 gap-2 mt-10">
                {
                    data?.data?.data?.map((video: VideoType) =>
                        <VideoCard video={video} key={video.id} />
                    )
                }
            </div>
        </>
    )
}

export default CourseVideos
