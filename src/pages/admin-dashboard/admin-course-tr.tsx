import { CourseType } from '@/@types/types'
import { TableCell, TableRow } from '@mui/material'
import { Link } from 'react-router-dom'
import { PenBox } from 'lucide-react'
import { useState } from 'react'
import { client, useDeleteCourse } from '@/service'
import { Button, DeleteCoursebtn, UpdateCourse } from '@/components'

const AdminCourseTr = ({ course, ind }: { course: CourseType, ind: number }) => {
    const { mutate: delCourse } = useDeleteCourse()

    const [_, setCurrentCourse] = useState<any>(null)


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const deleteCourse = (id: number) => {
        delCourse(id, {
            onSuccess: () => {
                client.invalidateQueries({ queryKey: ['get-courses'] })
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }
    return (
        <>
            {
                ind === 1 && <TableRow>
                    <TableCell><Link to={`${course.id}`}><img className="w-24" src={`https://api.bekgym.uz/images/${course?.attachment?.fileName}`} alt="" /></Link></TableCell>
                    <TableCell><Link className="text-base font-semibold" to={`${course.id}`}>{course.title.length > 25 ? course.title.slice(0, 25) + "..." : course.title}</Link></TableCell>
                    <TableCell className='truncate'>{course.description.length > 25 ? course.description.slice(0, 25) + "..." : course.description}</TableCell>
                    <TableCell>
                        <div className="flex gap-2 items-center justify-center">
                            <Button onClick={() => { setIsOpen(true); setCurrentCourse(course) }} className="bg-[#3c50e0] h-[36px] w-[36px] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white" size={'icon'}><PenBox className="h-[18px] w-[18px]" /></Button>
                            <DeleteCoursebtn id={course.id} deleteCourse={deleteCourse} ind={1} />
                            <UpdateCourse isOpen={isOpen} setIsOpen={setIsOpen} course={course} />
                        </div>
                    </TableCell>
                </TableRow>
            }
            {
                ind === 2 && <div className='w-full border rounded-xl shadow-lg'>
                    <Link to={`${course.id}`} className="">
                        <img className="w-full h-[220px] object-cover rounded-t-xl" src={`https://api.bekgym.uz/images/${course?.attachment?.fileName}`} alt="" />
                    </Link>
                    <div className="flex flex-col p-2 truncate">
                        <h3 className="text-lg ">{course.title?.length > 25 ? course.title.substring(0, 25) + "..." : course.title}</h3>
                        <h3 className="text-sm my-2">{course.description.length > 25 ? course.description.substring(0, 25) + "..." : course.description}</h3>
                        <div className="flex gap-2 items-center justify-center">
                            <Button onClick={() => { setIsOpen(true); setCurrentCourse(course) }} className="bg-[#3c50e0] h-full w-full hover:bg-[#3c50e0] hover:bg-opacity-90 text-white"><PenBox className="h-[18px] w-[18px] mr-1" /> Edit</Button>
                            <DeleteCoursebtn id={course.id} deleteCourse={deleteCourse} ind={2} />
                            <UpdateCourse isOpen={isOpen} setIsOpen={setIsOpen} course={course} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AdminCourseTr
