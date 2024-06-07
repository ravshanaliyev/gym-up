import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import { client } from "@/service/QueryClient"
import { useGetGallery } from "@/service/query/useGetGallery"
import { useCreateImage } from "@/service/mutation/useCreateImage"
import { Label } from "@/components/ui/label"
import { useState } from "react"


const AdminGallery = () => {
    const { data } = useGetGallery()
    const { register, handleSubmit } = useForm()
    const { mutate } = useCreateImage()
    const [image, setImage] = useState(null)
    const [search, setSearch] = useState("")

    function onSubmit(values: any) {
        const formData = new FormData()
        formData.append("Name", values.name)
        formData.append("Description", values.description)
        formData.append("Image", image as any)

        mutate(formData, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-gallery'] })
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
        <div>
            <div className="flex items-center justify-between py-3 border-b-2">
                <Input onChange={(e) => setSearch(e.target.value)} className="max-w-[400px] h-[40px]" placeholder="Search Image" />
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Add Image</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <h3 className="text-lg text-center">Create Image</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" placeholder="Name" {...register("name")} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Description</Label>
                                <Input type="text" id="name" placeholder="Name" {...register("description")} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">Image</Label>
                                <Input type="file" id="name" placeholder="Name" onChange={(e) =>
                                    // @ts-ignore
                                    setImage(e.target.files[0])} />
                            </div>
                            <Button type="submit" className="bg-[#3C50E0] h-[40px] hover:bg-[#5162e2]">Submit</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {
                    filteredData?.map((item: any) => (
                        <div key={item.id}>
                            <img src={item?.attachment?.fileName} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AdminGallery