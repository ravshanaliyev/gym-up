import { CourseType } from "@/@types/types"
import { Button, Dialog, Footer, Navbar, Offer, PagesHeader } from "@/components"
import { DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useGetCourses } from "@/service"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Courses = () => {
    const navigate = useNavigate()
    const token: any = localStorage.getItem('token') && jwtDecode(localStorage.getItem('token')!)
    const role: any = token && token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    useEffect(() => {
        role === "Admin" ? navigate('/user-dashboard') : navigate('/courses')
    }, [token])


    const { data: Courses } = useGetCourses()

    console.log(Courses?.data);


    return (
        <div>
            <Navbar />
            <PagesHeader title={'All Courses'} />
            <div className="container my-8 lg:my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Courses?.data?.map((course: CourseType) => (
                        <Dialog key={course.id}>
                            <DialogTrigger asChild>
                                <div className="w-full h-[250px] cursor-pointer lg:h-[300px] rounded-xl bg-[#f1f5f9] overflow-hidden flex justify-start items-end" style={{ backgroundImage: `url(https://api.bekgym.uz/images/${course?.attachment?.fileName})`, backgroundSize: 'cover' }}>
                                    <div className="w-full h-[70px] bg-black/70 flex justify-between items-center p-4">
                                        <h3 className="text-3xl font-bold text-white ">{course.title}</h3>
                                        <Button className="m-4" variant={'secondary'}>Kursni olish</Button>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] gap-2 py-8">
                                <h3 className="text-xl font-semibold">Bek Gymga xush kelibsiz</h3>
                                <p className="text-lg">Hurmatli foydalanuvchi, kurslardan foydalanish uchun quyidagi link orqali to&#39;lovni amalga oshiring. </p>
                                <Link to={`https://t.me/bekgymadmin`} className="text-lg underline ">bekgymadmin </Link>
                                <p className="text-lg">To&#39;lovingiz muvaffaqiyatli amalga oshirilgach, kurslarga to&#39;liq kirish imkoniyatiga ega bo&#39;lasiz. </p>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <Offer />
            <Footer />
        </div>
    )
}

export default Courses