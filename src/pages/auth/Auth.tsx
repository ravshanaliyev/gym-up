import { Navbar } from "@/components";
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";


const Auth = () => {

  const token = localStorage.getItem("token")

  const { pathname } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate("/")
    }
    // else{
    //   navigate("/auth")
    // }
  }, [pathname, token, navigate])

  return (
    <>
      <div className="auth-overlay">
        <Navbar/>
        <div className="flex  backdrop-filter backdrop-brightness-100 bg-black max-w-[400px] w-full  shadow-[0_0_3px_#000]  rounded-[6px] m-auto mt-[2.2rem]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Auth
