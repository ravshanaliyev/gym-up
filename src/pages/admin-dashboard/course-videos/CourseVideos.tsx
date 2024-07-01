import { VideoType } from "@/@types/types";
import { useGetCourseVideos } from "@/service/query/useGetCourseVideos";
import VideoCard from "@/utils/VideoCard";
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateVideo } from "@/service/mutation/useCreateVideo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { client } from "@/service/QueryClient";


const CourseVideos = () => {
    const { toast } = useToast()
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams()
    const [video, setVideo] = useState<VideoType | null>(null)
    const { data } = useGetCourseVideos(id)
    const { mutate, isPending } = useCreateVideo()

    function onSubmit(values: any) {
        const formData = new FormData()
        formData.append("Name", values.name)
        formData.append("Description", values.description)
        formData.append("Video", video as any)
        formData.append("CourseId", id as any)
        formData.append("Teacher", values.teacher)
        mutate(formData, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-course-videos'] })
                setIsOpen(false)
                reset()
                toast({
                    title: "Video added successfully",
                    description: "You can add more courses",
                    action: <Link to="/admin/courses"><Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white text-[12px] py-1 px-3" >View Courses</Button></Link>,
                })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    const filteredData = data?.data?.data?.filter((course: any) => {
        return course.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <div className="flex justify-between border-b border-gray-400 pb-[1rem] gap-2">
                <Input onChange={(e) => setSearch(e.target.value)} className="max-w-[400px] h-[40px]" placeholder="Search Video" />
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Add Video</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder="" {...register("name")} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Input type="text" id="description" placeholder="" {...register("description")} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="video">Video</Label>
                                <Input type="file" id="video" placeholder="" onChange={(e) =>
                                    // @ts-ignore
                                    setVideo(e.target.files[0])} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Teacher</Label>
                                <Input type="text" id="name" placeholder="" {...register("teacher")} />
                            </div>
                            <Button type="submit" className={`bg-[#3C50E0] h-[40px] hover:bg-[#5162e2] ${isPending ? "cursor-not-allowed" : ""}`} disabled={isPending}>{isPending ? "Loading..." : "Submit"}</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
                {
                    filteredData?.map((video: VideoType) =>
                        <VideoCard video={video} key={video.id} />
                    )
                }
            </div>
        </>
    )
}

export default CourseVideos
