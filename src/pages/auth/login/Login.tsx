import { useLogin } from "@/service/mutation/useLogin";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [passwordType, setPasswordType] = useState<string>("password")
    const [number, setNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [changeIcon, setChangeIcon] = useState<boolean>(false)
    console.log(passwordType);
    

    const handleShowPassword = () => {
        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
        setChangeIcon(!changeIcon)
    }

    const {mutate} = useLogin()


    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        const loginData: any = {number: "+"+number, password}
        e.preventDefault()
        mutate(loginData, {
            onSuccess: (res) => {
                console.log(res); 
            }
        })
    }

  return (
    <div>
         <h3 className="text-center text-[30px] font-[400] tracking-[2px]">Login</h3>
        <form onSubmit={handleLogin} className="w-full text-center">
           
            <label className="text-[16px] text-left mt-3 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">Phone Number
                <input value={number} onChange={(e:ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} id="number" type="number" className="w-full h-[40px] rounded-[6px] mt-[10px] outline-none indent-[10px]  border  border-[#cccbcb] "  />
            </label>
            <label className="relative text-[16px] text-left mt-3 inline-block w-full tracking-[.5px] font-[400]" htmlFor="passoword">Password
                <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="password" type={passwordType} className="w-full h-[40px] rounded-[6px] mt-[10px] outline-none indent-[10px]  border  border-[#cccbcb] "  />
                <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545]">{changeIcon ? "visibility_off" : "visibility"}</span>
            </label>
            <button type="submit" className="w-full mt-5 transition duration-[0.2s] bg-[#1752e0] rounded-[6px] text-[#fff]  text-[18px] font-[400] py-[5px] hover:bg-[#366ef3]">Login</button>
            <Link to={"/auth/register"}  className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If you don't exist an account ? Register</Link>
        </form>
    </div>
  )
}

export default Login
