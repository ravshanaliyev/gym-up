import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import Offer from "@/components/shared/offer"
import CoursesTable from "@/components/shared/courses-table"
import PagesHeader from "@/components/shared/pages-header"

const Courses = () => {
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