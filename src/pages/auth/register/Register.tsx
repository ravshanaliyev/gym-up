import { NewUserType } from "@/@types/types";
import { useRegister } from "@/service/mutation/useRegister";
import { ChangeEvent, FormEvent, useState } from "react"
import Login from "../login/Login";

const Register = ({ isLogin, setIsLogin, setIsRegistered }: { isLogin: boolean, setIsLogin: Function, setIsRegistered: Function }) => {

    const [passwordType, setPasswordType] = useState<string>("password")
    const [changeIcon, setChangeIcon] = useState<boolean>(false)

    const handleShowPassword = () => {
        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
        setChangeIcon(!changeIcon)
    }

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { mutate } = useRegister()

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newUserData: NewUserType = { firstname, lastname, phone, password }

        mutate(newUserData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    localStorage.setItem('verify-number', phone)
                    setTimeout(() => { setIsRegistered(true) }, 2000)
                }
                console.log(res);
            }
        })
    }


    return (
        <>
            {
                isLogin ? <Login setIsLogin={setIsLogin} /> :
                    <div >
                        <h3 className="text-center text-[30px] font-[400] tracking-[2px]">Register</h3>
                        <form onSubmit={handleRegister as any} className="w-full text-center">
                            <label className="text-[16px] text-left mt-3 inline-block w-full tracking-[.5px] font-[400]" htmlFor="firstname">Firstname
                                <input value={firstname} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)} id="firstname" type="text" name="firstname" className="w-full h-[40px] rounded-[6px] mt-[10px] outline-none indent-[10px]  border  border-[#cccbcb] " />
                            </label>
                            <label className="text-[16px] text-left mt-3 inline-block w-full tracking-[.5px] font-[400]" htmlFor="lastname">Lastname
                                <input value={lastname} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)} id="lastname" type="text" name="lastname" className="w-full h-[40px] rounded-[6px] mt-[10px] outline-none indent-[10px]  border  border-[#cccbcb] " />
                            </label>
                            <label className="text-[16px] text-left mt-3 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">Phone Number
                                <input value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} id="number" type="number" name="phone" className="w-full h-[40px] rounded-[6px] mt-[10px] outline-none indent-[10px]  border  border-[#cccbcb] " />
                            </label>
                            <label className="relative text-[16px] text-left mt-3 inline-block w-full tracking-[.5px] font-[400]" htmlFor="passoword">Password
                                <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="password" type={passwordType} name="password" className="w-full h-[40px] rounded-[6px] mt-[10px] outline-none indent-[10px]  border  border-[#cccbcb] " />
                                <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545]">{changeIcon ? "visibility_off" : "visibility"}</span>
                            </label>
                            <button type="submit" className="w-full mt-5 transition duration-[0.2s] bg-[#1752e0] rounded-[6px] text-[#fff]  text-[18px] font-[400] py-[5px] hover:bg-[#366ef3]">Register</button>
                            <button onClick={() => setIsLogin(true)} className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If already have an account ? Login</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Register
