import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./lib/routes"
import { Home, Gallery, Classes, Shop, About, SingleCourse, AdminDashboard, AddCourse, AdminProfile, Contact, Settings, AdminCourses, CourseVideos, AdminUsers } from "./pages"

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
          <Route path={ROUTES.ADD_COURSE} element={<AddCourse />} />
          <Route path={ROUTES.PROFILE} element={<AdminProfile />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.ADMIN_COURSES} element={<AdminCourses />} />
          <Route path={ROUTES.ADMIN_COURSE_SINGLE} element={<CourseVideos />} />
          <Route path={ROUTES.ADMIN_USERS} element={<AdminUsers />} />
        </Route>
      </Routes>
    </>
  )
}

export default App