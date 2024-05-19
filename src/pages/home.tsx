import AboutGym from "@/components/shared/about-gym"
import Header from "@/components/shared/header"
import Navbar from "@/components/shared/navbar"
import Services from "@/components/shared/services"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutGym />
            <Services />
        </div>
    )
}

export default Home