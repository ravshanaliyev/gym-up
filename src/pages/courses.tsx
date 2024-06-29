import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import Offer from "@/components/shared/offer"
import CoursesTable from "@/components/shared/courses-table"
import PagesHeader from "@/components/shared/pages-header"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Courses = () => {
    const navigate = useNavigate()
    const token: any = localStorage.getItem('token') && jwtDecode(localStorage.getItem('token')!)
    const role: any = token && token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    useEffect(() => {
        role === "Admin" ? navigate('/user-dashboard') : navigate('/courses')
    }, [token])
    return (
        <div>
            <Navbar />
            <PagesHeader title={'All Courses'} />
            <CoursesTable />
            <Offer />
            <Footer />
        </div>
    )
}

export default Courses