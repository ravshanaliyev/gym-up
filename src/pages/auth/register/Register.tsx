import { NewUserType } from "@/@types/types";
import { useRegister } from "@/service/mutation/useRegister";
import { useStore } from "@/store/useStore";
import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom";
import Verify from "../verify/Verify";

const Register = () => {

    const [passwordType, setPasswordType] = useState<string>("password")
    const [changeIcon, setChangeIcon] = useState<boolean>(false)
    const [openVerify, setOpenVerify] = useState<boolean>(false)

    const handleShowPassword = () => {
        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
        setChangeIcon(!changeIcon)
    }

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { mutate } = useRegister()
    const { setRegisteredUser, UserData } = useStore()

    console.log(UserData);
    

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newUserData: NewUserType = { firstname, lastname, phone, password }

        mutate(newUserData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    localStorage.setItem('verify-number', phone)
                    setOpenVerify(true)
                    setRegisteredUser(newUserData)
                }
                console.log(res);
            }
        })
    }


    return (
        <div >
            <h3 className="text-center text-[30px] font-[500] text-[#fff] tracking-[2px]">Register</h3>
            <form onSubmit={handleRegister as any} className="w-full text-center">
                <label className="text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="firstname">Firstname
                    <input value={firstname} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)} id="firstname" type="text" name="firstname" className=" bg-transparent border-white border-b  w-full h-[28px]  mt-[10px] outline-none indent-[5px] py-2     " />
                </label>
                <label className="text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="lastname">Lastname
                    <input value={lastname} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)} id="lastname" type="text" name="lastname" className=" bg-transparent border-white border-b  w-full h-[28px]  mt-[10px] outline-none indent-[5px] py-2     " />
                </label>
                <label className="text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">Phone Number
                    <input value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} id="number" type="number" name="phone" className=" bg-transparent border-white border-b  w-full h-[28px]  mt-[10px] outline-none indent-[5px] py-2     " />
                </label>
                <label className="relative text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="passoword">Password
                    <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="password" type={passwordType} name="password" className=" bg-transparent border-white border-b  w-full h-[28px]  mt-[10px] outline-none indent-[5px] py-2     " />
                    <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545]">{changeIcon ? "visibility_off" : "visibility"}</span>
                </label>
                <button type="submit" className="w-full mt-5 transition duration-[0.2s] bg-[#ff1414] rounded-[6px] text-[#fff]  text-[18px] font-[400] py-[5px] hover:bg-[#fa5757]">Register</button>
                <Link to={'/auth/login'} className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If already have an account ? Login</Link>
            </form>
            <Verify openVerify={openVerify} setOpenVerify={setOpenVerify}/>
        </div>
    )
}

export default Register
