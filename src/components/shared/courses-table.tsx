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
                        <DialogContent className="sm:max-w-[425px] lg:pt-10">
                            <p className="text-lg">Hurmatli foydalanuvchi, kurslardan foydalanish uchun quyidagi link orqali to&#39;lovni amalga oshiring.</p>
                            <Link className="underline text-lg" to={`https://t.me/unusdv`}>https://t.me/unusdv</Link>
                            <p>To&#39;lovingiz muvaffaqiyatli amalga oshirilgach, kurslarga to&#39;liq kirish imkoniyatiga ega bo&#39;lasiz.</p>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}

export default CoursesTable