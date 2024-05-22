import Course from "@/components/shared/course"
import Footer from "@/components/shared/footer"
import Navbar from "@/components/shared/navbar"
import Offer from "@/components/shared/offer"
import PagesHeader from "@/components/shared/pages-header"

const Courses = () => {
    return (
        <div>
            <Navbar />
            <PagesHeader title={'All Courses'} />
            <Course />
            <Offer />
            <Footer />
        </div>
    )
}

export default Courses