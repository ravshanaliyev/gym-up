import { useGetCourseVideos } from "@/service/query/useGetCourseVideos"
import { useParams } from "react-router-dom"

const CourseVid = () => {
    const { id } = useParams()
    const { data } = useGetCourseVideos(id)
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
                {data?.data?.data?.map((video: any) => (
                    <div key={video.id} className="bg-white max-w-[350px] w-full border shadow-sm rounded-lg">
                        <video controlsList="nodownload" className="h-[280px] max-w-[350px] w-full rounded-t-lg" autoPlay muted loop controls >
                            <source className="max-w-[350px] w-full" src={`https://api.bekgym.uz/videos/${video?.attachment?.fileName}`} />
                        </video>
                        <div className="p-2">
                            <h3 className="text-[#1c2434] font-[600] text-[20px] mt-2">{video.name.length > 20 ? video.name.slice(0, 20) + "..." : video.name}</h3>
                            <p className="my-2 whitespace-normal">{video.description.length > 20 ? video.description.slice(0, 20) + "..." : video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseVid