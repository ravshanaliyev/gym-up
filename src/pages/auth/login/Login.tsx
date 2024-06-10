import { useLogin } from "@/service/mutation/useLogin";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [focused, setFocused] = useState(false);
    const [changeIcon, setChangeIcon] = useState(false);
    const navigate = useNavigate();

    const { mutate } = useLogin();

    const handleShowPassword = () => {
        setPasswordType(prevType => prevType === "text" ? "password" : "text");
        setChangeIcon(prevIcon => !prevIcon);
    };

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loginData: any = { phone: phoneNumber, password };

        mutate(loginData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    const token = res.data || localStorage.getItem('token');
                    const role = token && jwtDecode(token);
                    const isAdmin = role["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    localStorage.setItem("token", res.data);
                    if (isAdmin === "Admin") {
                        navigate("/admin/courses");
                    } else {
                        // Redirect to a different page for non-admin users if needed
                        navigate("/user/dashboard");
                    }
                }
            }
        });
    };

    const handlePhoneNumberChange = (input_value: string) => {
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
        if (!phoneNumber.replace(/\s/g, '')) {
            setPhoneNumber('');
        }
        setFocused(false);
    };

    return (
        <div>
            <h3 className="text-center text-[32px] font-[500] text-[#fff] tracking-[2px]">Login</h3>
            <form onSubmit={handleLogin} className="w-full text-center">
                <label className="text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">Phone Number
                    <input placeholder="+998 XX XXX XXXX" onBlur={handleInputBlur} value={focused ? phoneNumber : ""} onFocus={handleInputFocus} onChange={(e) => handlePhoneNumberChange(e.target.value)} id="number" type="text" name="number" className=" bg-[#1b1b1b] p-[10px]    w-full h-[45px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px]   " />
                </label>
                <label className="relative text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="password">Password
                    <input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="password" type={passwordType} name="password" className="  bg-[#1b1b1b] p-[10px]    w-full h-[45px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px] " />
                    <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545] cursor-pointer">{changeIcon ? "visibility_off" : "visibility"}</span>
                </label>

                <button type="submit" className="w-full  transition duration-[0.2s] bg-[#ff1414] rounded-[6px] text-[#fff] mt-[2rem]  text-[18px] font-[400] py-[5px] hover:bg-[#fa5757]">Login</button>

                <Link to={"/auth/register"} className="mt-3 text-center inline-block font-[400] text-[#1752e0] m-auto hover:underline" >If you don't have an account, register here</Link>
            </form>
        </div>
    );
}

export default Login;
