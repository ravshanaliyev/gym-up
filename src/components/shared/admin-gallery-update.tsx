import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogTrigger, } from "@/components/ui/dialog"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useUpdateImage } from '@/service/mutation/useUpdateImage'
import { client } from '@/service/QueryClient'
import { SquarePen } from 'lucide-react'
import { Button } from '../ui/button'

const AdminGalleryUpdate = ({ gallery }: { gallery: any }) => {
    const { mutate } = useUpdateImage()
    const [isOpen, setIsOpen] = React.useState(false)
    const [Name, setName] = React.useState("")
    const [Description, setDescription] = React.useState("")
    const [Image, setImage] = React.useState('')
    useEffect(() => {
        setName(gallery.name)
        setDescription(gallery.description)
        setImage(gallery.image)
    }, [gallery])
    const updateImage = { Name, Description, Image, Id: gallery.id }

    const onSubmit = (e: any) => {
        e.preventDefault()
        mutate(updateImage, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-gallery'] })
                setIsOpen(false)
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className="!bg-[#3C50E0] h-[36px] !hover:bg-[#5162e2] !text-white w-full"><SquarePen className="h-4 w-4 mr-1" /> Edit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <h3 className="text-lg text-center">Create Image</h3>
                    <form onSubmit={onSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value.trimStart())} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Description</Label>
                            <Input type="text" id="name" placeholder="Description" value={Description} onChange={(e) => setDescription(e.target.value.trimStart())} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Image</Label>
                            <Input type="file" id="name" onChange={(e) =>
                                // @ts-ignore
                                setImage(e.target.files[0])} />
                        </div>
                        <Button type="submit" className="!bg-[#3C50E0] h-[40px] !hover:bg-[#5162e2] !text-white">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AdminGalleryUpdate