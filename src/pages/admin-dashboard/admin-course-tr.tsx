import { CourseType } from '@/@types/types'
import DeleteCoursebtn from '@/components/shared/delete-coursebtn'
import UpdateCourse from '@/components/shared/update-course'
import { Button } from '@/components/ui/button'
import { useDeleteCourse } from '@/service/mutation/useDeleteCourse'
import { TableCell, TableRow } from '@mui/material'
import { Link } from 'react-router-dom'
import { client } from "@/service/QueryClient"
import { Eye, EyeIcon, Pen, PenBox } from 'lucide-react'
import { useState } from 'react'

const AdminCourseTr = ({ course }: { course: CourseType }) => {

    const { mutate: delCourse } = useDeleteCourse()

    const [currentCourse, setCurrentCourse] = useState<any>(null)

    console.log(currentCourse);
    

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const deleteCourse = (id: number) => {
        delCourse(id, {
            onSuccess: (res) => {
                console.log(res);
                client.invalidateQueries({ queryKey: ['get-courses'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <TableRow>
            <TableCell><Link to={`${course.id}`}><img className="w-24" src={'https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery1.png'} alt="" /></Link></TableCell>
            <TableCell><Link className="text-base font-semibold" to={`${course.id}`}>{course.title}</Link></TableCell>
            <TableCell>{course.description}</TableCell>
            <TableCell>
                <div className="flex gap-2 items-center justify-center">
                    <Button className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><Eye className="h-[18px] w-[18px]" /></Button>
                    <Button onClick={() => {setIsOpen(true); setCurrentCourse(course)}} className="bg-[#3c50e0] h-9 w-9 hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><PenBox className="h-[18px] w-[18px]" /></Button>
                   
                    <DeleteCoursebtn id={course.id} deleteCourse={deleteCourse} />
                    <UpdateCourse isOpen={isOpen} setIsOpen={setIsOpen} course={course} />
                </div>
            </TableCell>
        </TableRow>
    )
}

export default AdminCourseTr
