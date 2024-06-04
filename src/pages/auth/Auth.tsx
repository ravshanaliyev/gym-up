import Register from "./register/Register";
import Login from "./login/Login";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";

const Auth = ({ openAuth, setOpenAuth }: { openAuth: boolean, setOpenAuth: Function }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  useEffect(() => {
    openAuth ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  }, [openAuth])


  return (
    <Modal className=" flex justify-center items-center" aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
      open={openAuth}
      onClose={() => setOpenAuth(false)}
    >
      <div className="relative max-w-[500px] text-center w-full bg-[#fff] rounded-[6px] p-[1.4rem] ">
        <span onClick={() => setOpenAuth(false)} className="material-symbols-outlined absolute right-3 top-3 cursor-pointer">close</span>

        {isLogin ? <Login /> : <Register  setIsRegister={setIsLogin} />}

        {
          isLogin ? <button onClick={() => setIsLogin(false)} className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If you don't exist an account ? Register</button>
            : <button onClick={() => setIsLogin(true)} className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If already have an account ? Login</button>
        }
      </div>
    </Modal>
  )
}

export default Auth
