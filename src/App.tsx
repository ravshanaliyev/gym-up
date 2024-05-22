import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./lib/routes"
import { Home, Login, Register, Gallery, Classes, Shop, About } from "./pages"

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
        <Route path={ROUTES.NOT_FOUND} element={<div>*</div>} />
      </Routes>
    </>
  )
}

export default App