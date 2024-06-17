import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./lib/routes"
import Gallery from "./pages/gallery"
import Home from "./pages/home"
import { AdminGallery, AdminUsers, Classes } from "./pages"
import Shop from "./pages/shop"
import About from "./pages/about"
import Contact from "./pages/contact"
import AdminDashboard from "./pages/admin-dashboard"
import AdminProfile from "./pages/admin-dashboard/admin-profile"
import Settings from "./pages/admin-dashboard/settings"
import AdminCourses from "./pages/admin-dashboard/admin-courses"
import CourseVideos from "./pages/admin-dashboard/course-videos/CourseVideos"
import SingleCourse from "./pages/SingleCourse"
import Auth from "./pages/auth/Auth"
import Register from "./pages/auth/register/Register"
import Login from "./pages/auth/login/Login"
import CourseDashboard from "./pages/courseDashboard"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CoursesTable from "./components/shared/courses-table"

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.COURSES} element={<Classes />} />
        <Route path={ROUTES.SINGLE_COURSE} element={<SingleCourse />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.NOT_FOUND} element={<div>*</div>} />
        <Route path={ROUTES.ADMIN} element={<AdminDashboard />}>
          <Route path={ROUTES.PROFILE} element={<AdminProfile />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.ADMIN_COURSES} element={<AdminCourses />} />
          <Route path={ROUTES.ADMIN_COURSE_SINGLE} element={<CourseVideos />} />
          <Route path={ROUTES.ADMIN_USERS} element={<AdminUsers />} />
          <Route path={ROUTES.ADMIN_GALLERY} element={<AdminGallery />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/courses-dashboard" element={<CourseDashboard />}>
          <Route path="course/:id" element={<CoursesTable />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App