import { Button } from "@/components/ui/button";
import { VideoType } from "@/@types/types";
import { useDeleteVideo } from "@/service/mutation/useDeleteVideo";
import { useToast } from "@/components/ui/use-toast";
import { client } from "@/service/QueryClient";

const VideoCard = ({ video }: { video: VideoType }) => {
  const { toast } = useToast()
  const { mutate } = useDeleteVideo()
  const handleDeleteVideo = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ['get-course-videos'] })
        toast({
          title: "Video deleted successfully",
          description: "You can add more videos",
        })
      },
      onError: (error) => {
        console.log(error);
      }
    })
  }
  return (
    <div className="bg-white max-w-[320px] w-full border shadow-sm ">
      <video controlsList="nodownload" className="h-[280px] max-w-[350px] w-full rounded-t-lg" autoPlay muted loop controls >
        <source className="max-w-[350px] w-full" src={`http://45.138.158.207:8080/videos/${video?.attachment?.fileName}`} />
      </video>
      <div className="p-2">
        <h3 className="text-[#1c2434] font-[600] text-[18px] mt-2">{video.name}</h3>
        <p className="my-2 whitespace-normal">{video.description}</p>
        <div className="flex items-center gap-3 w-full justify-between">
          <Button className="w-full bg-[#3C50E0] hover:bg-[#5162e2] " size={'sm'}>Edit</Button>
          <Button onClick={() => handleDeleteVideo(video.id)} className="w-full bg-[#3C50E0] hover:bg-[#5162e2] " size={'sm'}>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
