import { useGetCourses } from "@/service"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Link } from "react-router-dom";

const CoursesTable = () => {
    const { data } = useGetCourses()
    console.log(data);

    return (
        <div className='container my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.data?.map((course: any) => (
                    <Dialog key={course.id}>
                        <DialogTrigger asChild>
                            <div className="w-full h-[250px] cursor-pointer lg:h-[300px] rounded-xl bg-[#f1f5f9] overflow-hidden flex justify-start items-end" style={{ backgroundImage: `url(https://api.bekgym.uz/images/${course?.attachment?.fileName})`, backgroundSize: 'cover' }}>
                                <h3 className="text-3xl font-bold text-white p-4">{course.title}</h3>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <h3 className="text-xl font-semibold">Bek Gymga xush kelibsiz</h3>
                            <p className="text-lg">Kurslarni sotib olish uchun quyidagi <Link className="underline" to={`https://t.me/unusdv`}>unusdv</Link> telegram akkountga murojaat qiling. Kursni bir martalik to&#39;lov orqali sotib olishingiz mumkin. </p>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}

export default CoursesTable