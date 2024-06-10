import { useLogin } from "@/service/mutation/useLogin";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [passwordType, setPasswordType] = useState<string>("password")
    const [number, setNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [changeIcon, setChangeIcon] = useState<boolean>(false)
    console.log(passwordType);

    const navigate = useNavigate()


    const handleShowPassword = () => {
        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
        setChangeIcon(!changeIcon)
    }

    const { mutate } = useLogin()


    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const loginData: any = { phone:number, password } 

        mutate(loginData, {
            onSuccess: (res) => {
                if(res.data){
                    localStorage.setItem("token", res.data)
                    setTimeout(() => {navigate("/")}, 2000)
                }
            }
        })
    }

    return (
        <div>
            <h3 className="text-center text-[32px] font-[500] text-[#fff] tracking-[2px]">Login</h3>
            <form onSubmit={handleLogin} className="w-full text-center">
                <label className="text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">Phone Number
                    <input value={number} onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} id="number" type="text" name="number" className=" bg-transparent border-white border-b  w-full h-[28px]  mt-[10px] outline-none indent-[5px] py-2     " />
                </label>
                <label className="relative text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="passoword">Password
                                <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="password" type={passwordType} name="password" className=" bg-transparent border-white border-b  w-full h-[28px]  mt-[10px] outline-none indent-[5px] py-2     " />
                                <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545]">{changeIcon ? "visibility_off" : "visibility"}</span>
                            </label>
                <button type="submit" className="w-full mt-5 transition duration-[0.2s] bg-[#ff1414] rounded-[6px] text-[#fff]  text-[18px] font-[400] py-[5px] hover:bg-[#fa5757]">Login</button>
                <Link to={"/auth/register"} className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If you don't exist an account ? Register</Link>
            </form>
        </div>
    )
}

export default Login
