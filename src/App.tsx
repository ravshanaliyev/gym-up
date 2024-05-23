import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./lib/routes"
import { Home, Login, Register, Gallery, Classes, Shop, About } from "./pages"
import Contact from "./pages/contact"
import AdminDashboard from "./pages/admin-dashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.COURSES} element={<Classes />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.NOT_FOUND} element={<div>*</div>} />
        <Route path={ROUTES.ADMIN} element={<AdminDashboard />}>
          <Route path={ROUTES.ADD_COURSE} element={<>iojige</>} />
          <Route path={ROUTES.PROFILE} element={<>iojige</>} />
          <Route path={ROUTES.SETTINGS} element={<>iojige</>} />
          <Route path={ROUTES.ADMIN_COURSES} element={<>iojige</>} />
        </Route>
      </Routes>
    </>
  )
}

export default App