import Register from "./register/Register";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import Verify from "./verify/Verify";

const Auth = ({ openAuth, setOpenAuth }: { openAuth: boolean, setOpenAuth: Function }) => {


  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isRegistered, setIsRegistered] = useState<boolean>(false)

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
        {
          isRegistered ? <Verify/> : <Register setIsRegistered={setIsRegistered} isLogin={isLogin}  setIsLogin={setIsLogin} />
        }
      </div>
    </Modal>
  )
}

export default Auth
