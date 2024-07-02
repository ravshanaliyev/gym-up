import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./lib/routes"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CoursesTable from "./components/shared/courses-table"
import { About, AdminCourses, AdminDashboard, AdminGallery, AdminProfile, AdminUsers, Auth, Classes, Contact, CourseDashboard, CourseVid, CourseVideos, Gallery, Home, Login, Register, Settings, Shop, SingleCourse, UserAccount, UserDashboard } from "./pages";

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
        <Route path={ROUTES.USER_DASHBOARD} element={<UserDashboard />}>
          <Route path={ROUTES.USER_DASHBOARD_COURSES} element={<CourseVid />} />
          <Route path={ROUTES.USER_DASHBOARD_ACCOUNT} element={<UserAccount />} />
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