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

import { useState } from "react";
import { Label } from "@/components/ui/label";


const CourseVideos = () => {
    const { register, handleSubmit } = useForm()
    const { id } = useParams()
    const [video, setVideo] = useState<VideoType | null>(null)
    const { data } = useGetCourseVideos(id)
    const { mutate } = useCreateVideo()
    console.log(data?.data?.data);


    function onSubmit(values: any) {
        const formData = new FormData()
        formData.append("Name", values.name)
        formData.append("Description", values.description)
        formData.append("Video", video as any)
        formData.append("CourseId", id as any)
        formData.append("Teacher", values.teacher)
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
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder="" {...register("name")} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Description</Label>
                                <Input type="text" id="name" placeholder="" {...register("description")} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Video</Label>
                                <Input type="file" id="name" placeholder="" onChange={(e) =>
                                    // @ts-ignore
                                    setVideo(e.target.files[0])} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Teacher</Label>
                                <Input type="text" id="name" placeholder="" {...register("teacher")} />
                            </div>
                            <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center">
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
