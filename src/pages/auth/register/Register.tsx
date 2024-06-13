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
    const [registerLoading, setRegisterLoading] = useState<boolean>(false)

    const handleShowPassword = () => {
        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
        setChangeIcon(!changeIcon)
    }

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [focused, setFocused] = useState<boolean>(false)

    const { mutate } = useRegister()
    const { setRegisteredUser } = useStore()

    const newUserData: NewUserType = { firstname, lastname, phone: phoneNumber, password }
    
    

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setRegisterLoading(true)

        mutate(newUserData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    localStorage.setItem('verify-number', phoneNumber)
                    setTimeout(() => {setRegisterLoading(false)}, 2000)
                    setTimeout(() => {setOpenVerify(true)}, 3000)
                    setRegisteredUser(newUserData)
                }
                else  {
                    setTimeout(() => {setRegisterLoading(false)}, 2000)
                }
                console.log(res);
            }
        })
    }


    const handlePhoneNumberChange = (input_value: string) => {
        setPhoneNumber(input_value)
        const pattern = /^\+998\s?\d{2}\s?\d{3}\s?\d{4}$/;
        if (pattern.test(input_value) || input_value === '') {
            setPhoneNumber(input_value);
        }
    };

    
    const handleInputFocus = () => {
        if (!phoneNumber) {
            setPhoneNumber('+998');
        }
        setFocused(true);
    };

    const handleInputBlur = () => {
        console.log('');
        // if (!phoneNumber.replace(/\s/g, '')) {
        //     setPhoneNumber('');
        // }
        // setFocused(false);
    };

    return (
            <>
        <div  >
            <h3 className="text-center text-[30px] font-[500] text-[#fff] tracking-[2px]">Register</h3>
            <form onSubmit={handleRegister as any} className="w-full text-center">
                <label className="text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="firstname">Firstname
                    <input value={firstname} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value.trimStart())} id="firstname" type="text" name="firstname" className="  bg-[#1b1b1b] p-[10px]    w-full h-[42px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px]      " />
                </label>
                <label className="text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="lastname">Lastname
                    <input value={lastname} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value.trimStart())} id="lastname" type="text" name="lastname" className="  bg-[#1b1b1b] p-[10px]    w-full h-[42px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px]      " />
                </label>
                <label className="text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">Phone Number
                <input placeholder="+998 XX XXX XXXX" onBlur={handleInputBlur} value={focused ? phoneNumber : ""} onFocus={handleInputFocus} onChange={(e) => handlePhoneNumberChange(e.target.value)} id="number" type="text" name="number" className=" bg-[#1b1b1b] p-[10px]    w-full h-[42px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px]   " />
                </label>
                <label className="relative text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="passoword">Password
                    <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim())} id="password" type={passwordType} name="password" className="  bg-[#1b1b1b] p-[10px]    w-full h-[42px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px]      " />
                    <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545] cursor-pointer">{changeIcon ? "visibility_off" : "visibility"}</span>
                </label>
            
            <div style={registerLoading ? {cursor: "not-allowed"} : {cursor: "pointer"}} className="w-full mt-8 transition duration-[0.2s]  bg-[#ff1414]  text-[#fff]   text-[18px] font-[400] py-[7px] rounded-[6px] hover:bg-[#fa5757]">
                    {
                        registerLoading ? <div className="register-loader"></div>
                        : <button type="submit" className="">Register</button>
                    }
            </div>
                
                <Link to={'/auth/login'} className="mt-3 text-center inline-block font-[400] text-[#fff] text-[18px] m-auto hover:underline" >If already have an account,  <span className="text-[#1752e0]">Login</span></Link>
            </form>
        </div>
            <Verify openVerify={openVerify} setOpenVerify={setOpenVerify}/>
        </>
    )   
}

export default Register
