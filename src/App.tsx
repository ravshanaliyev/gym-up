import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./lib/routes"
import { Home, Login, Register, Gallery, Classes, Shop, About } from "./pages"
import Contact from "./pages/contact"
import AdminDashboard from "./pages/admin-dashboard"
import AddCourse from "./pages/admin-dashboard/add-course"
import AdminProfile from "./pages/admin-dashboard/admin-profile"
import Settings from "./pages/admin-dashboard/settings"
import AdminCourses from "./pages/admin-dashboard/admin-courses"
import CourseVideos from "./pages/admin-dashboard/course-videos/CourseVideos"
import SingleCourse from "./pages/SingleCourse"
import Auth from "./pages/auth/Auth"

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.COURSES} element={<Classes />} />
        <Route path={ROUTES.SINGLE_COURSE} element={<SingleCourse/>}/>
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.NOT_FOUND} element={<div>*</div>} />
        <Route path={ROUTES.ADMIN} element={<AdminDashboard />}>
          <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
          <Route path={ROUTES.PROFILE} element={<AdminProfile />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.ADMIN_COURSES} element={<AdminCourses />} />
          <Route path={ROUTES.ADMIN_COURSE_SINGLE} element={<CourseVideos/>}/>
        </Route>

    {/* AUTH */}
    <Route path="auth" element={<Auth/>}/>
      </Routes>
    </>
  )
}

export default App