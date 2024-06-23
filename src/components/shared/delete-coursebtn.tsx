import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"

const DeleteCoursebtn = ({ deleteCourse, id, ind }: { deleteCourse: any, id: number, ind?: number }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className={`${ind === 1 ? 'h-[36px] w-[36px]' : 'w-full h-full py-2'}  hover:bg-opacity-90 text-white`} size={'icon'}><Trash2 className={`h-4 w-4 ${ind === 2 && 'mr-1'} `} /> {ind === 1 ? "" : "Delete"}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" onClick={() => deleteCourse(id)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteCoursebtn