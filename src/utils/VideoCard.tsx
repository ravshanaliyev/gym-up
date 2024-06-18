import { Button } from "@/components/ui/button";
import { VideoType } from "@/@types/types";
import { useDeleteVideo } from "@/service/mutation/useDeleteVideo";
import { useToast } from "@/components/ui/use-toast";
import { client } from "@/service/QueryClient";
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useUpdateVideo } from "@/service/mutation/useUpdateVideo";

const VideoCard = ({ video }: { video: VideoType }) => {
  const { toast } = useToast()
  const { mutate } = useDeleteVideo()
  const { mutate: mutateVideo, isPending } = useUpdateVideo()
  const [id, setId] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [teacher, setTeacher] = useState("")
  const [courseId, setCourseId] = useState(0)
  const [videoId, setVideoId] = useState('')

  useEffect(() => {
    setId(video.id)
    setName(video.name)
    setDescription(video.description)
    setTeacher(video.teacher)
    setCourseId(video.courseId)
    setVideoId(video.attachment?.fileName)
  }, [video])
  const updateSingleCourse = { id, name, description, teacher, courseId, video: videoId }
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
  const handleUpdateSingleCourse = (e: any) => {
    e.preventDefault()
    console.log(video);
    mutateVideo(updateSingleCourse, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ['get-course-videos'] })
        setIsOpen(false)
        toast({
          title: "Video updated successfully",
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
        <source className="max-w-[350px] w-full" src={`https://api.bekgym.uz/videos/${video?.attachment?.fileName}`} />
      </video>
      <div className="p-2">
        <h3 className="text-[#1c2434] font-[600] text-[18px] mt-2">{video.name}</h3>
        <p className="my-2 whitespace-normal">{video.description}</p>
        <div className="flex items-center gap-3 w-full justify-between">
          <Dialog open={isOpen} onOpenChange={setIsOpen as any}>
            <DialogTrigger asChild>
              {/* <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size="icon">
                <Pencil className="h-4 w-4" />
              </Button> */}
              <Button className="w-full bg-[#3C50E0] hover:bg-[#5162e2] " size={'sm'}>Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <h3 className="text-lg text-center">Update Course</h3>
              <form onSubmit={handleUpdateSingleCourse as any} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="title">Name</Label>
                  <Input type="text" id="title" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="teacher">Teacher</Label>
                  <Input type="text" id="teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="video">Video</Label>
                  <Input type="file" id="video" onChange={(e) =>
                    // @ts-ignore
                    setVideoId(e.target.files[0])} />
                </div>
                <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]" disabled={isPending}>Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
          <Button onClick={() => handleDeleteVideo(video.id)} className="w-full bg-[#ff1414] hover:bg-[#5162e2] " size={'sm'}>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
