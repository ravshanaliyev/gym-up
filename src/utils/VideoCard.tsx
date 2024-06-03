import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { VideoType } from "@/@types/types";

const VideoCard = ({video}: {video: VideoType}) => {
    const {id} = useParams()
    console.log(id);
    
  return (
    <div   className="bg-white max-w-[300px]">
                    <video className="h-[280px] rounded-[10px]"  autoPlay muted loop   controls >
                        <source  src={video?.attachment?.filePath} />
                    </video>
                    <h3 className="text-[#1c2434] font-[600] text-[18px] mt-4">{video.name}</h3>
                    <p className="mt-1">{video.description}</p>
                    <Button className="w-full tracking-[1px] font-[400] h-[30px]">Delete</Button>
                </div>
  )
}

export default VideoCard
