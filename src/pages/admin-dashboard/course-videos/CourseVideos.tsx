import { VideoType } from "@/@types/types";
import { useGetCourseVideos } from "@/service/query/useGetCourseVideos";
import VideoCard from "@/utils/VideoCard";
import { useParams } from "react-router-dom"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AddVideoModal from "@/utils/AddVideoModal";
import { useState } from "react";

const CourseVideos = () => {
    const {id} = useParams()

    const [videoModal, setVideoModal] = useState<boolean>(false)

    const {data} = useGetCourseVideos(id)
        console.log(data?.data?.data);
        
  return (
    <>
        <div className="flex justify-between border-b border-gray-400 pb-[1rem]">
            <Input className="max-w-[400px] h-[40px]" placeholder="Search Video"/>
            <Button onClick={() => setVideoModal(true)} className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Add Video</Button>
            <AddVideoModal videoModal={videoModal} setVideoModal={setVideoModal}/>
        </div>
    <div className="w-full grid grid-cols-3 gap-2 mt-10">
        {
            data?.data?.data?.map((video: VideoType) =>
                <VideoCard video={video} key={video.id}/>
        )
    }
    </div>
    </>
  )
}

export default CourseVideos
