import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { client, useCreateImage, useDeleteImage, useGetGallery } from "@/service"
import { AdminGalleryUpdate, Button, DeleteCoursebtn, Input, Label } from "@/components"


const AdminGallery = () => {
    const { data } = useGetGallery()
    const { register, handleSubmit } = useForm()
    const { mutate, isPending } = useCreateImage()
    const { mutate: deleteImage } = useDeleteImage()
    const [image, setImage] = useState(null)
    const [search, setSearch] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    function onSubmit(values: any) {
        const formData = new FormData()
        formData.append("Name", values.name.trimStart())
        formData.append("Description", values.description.trimStart())
        formData.append("Image", image as any)

        mutate(formData, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-gallery'] })
                setIsOpen(false)
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    const filteredData = data?.data?.data?.filter((course: any) => {
        return course.name.toLowerCase().includes(search.toLowerCase())
    })

    const deleteImg = (id: number) => {
        deleteImage(id, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-gallery'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <div>
            <div className="flex items-center justify-between py-3 border-b-2 gap-4">
                <Input onChange={(e) => setSearch(e.target.value)} className="max-w-[400px] h-[40px] text-sm md:text-[15px]" placeholder="Search Image" />
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2] text-sm md:text-[15px] font-normal">Add Image</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <h3 className="text-lg text-center">Create Image</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder="Name" {...register("name", { required: true })} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Description</Label>
                                <Input type="text" id="name" placeholder="Name" {...register("description", { required: true })} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Image</Label>
                                <Input type="file" id="name" placeholder="Name" onChange={(e) =>
                                    // @ts-ignore
                                    setImage(e.target.files[0])} />
                            </div>
                            <Button type="submit" disabled={isPending} className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
                {
                    filteredData?.map((item: any) => (
                        <div key={item.id} className="border rounded-xl h-fit">
                            <img className="w-full h-[220px] object-cover rounded-t-xl" src={`https://api.bekgym.uz/images/${item?.attachment?.fileName}`} alt="" />
                            <div className="flex flex-col p-2">
                                <h3 className="text-lg ">{item.name?.length > 25 ? item.name.substring(0, 25) + "..." : item.name}</h3>
                                <h3 className="text-sm my-2  break-words">{item.description}</h3>
                                <div className="flex items-center gap-4 justify-between mt-2">
                                    <AdminGalleryUpdate gallery={item} />
                                    {/* <Button onClick={() => deleteImg(item.id)} className="w-1/2"><Trash2 className="h-4 w-4 mr-1" /> Delete</Button> */}
                                    <DeleteCoursebtn id={item.id} deleteCourse={deleteImg} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminGallery