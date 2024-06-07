import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { VideoType } from "@/@types/types";

const VideoCard = ({ video }: { video: VideoType }) => {
  const { id } = useParams()
  console.log(id);

  return (
    <div className="bg-white max-w-[350px] border shadow-sm">
      <video className="h-[280px] rounded-t-lg" autoPlay muted loop controls >
        <source src={video?.attachment?.filePath} />
      </video>
      <div className="p-2">
        <h3 className="text-[#1c2434] font-[600] text-[18px] mt-2">{video.name}</h3>
        <p className="my-2">{video.description}</p>
        <div className="flex items-center gap-3 w-full justify-between">
          <Button className="w-full bg-[#3C50E0] hover:bg-[#5162e2] " size={'sm'}>Edit</Button>
          <Button className="w-full bg-[#3C50E0] hover:bg-[#5162e2] " size={'sm'}>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
