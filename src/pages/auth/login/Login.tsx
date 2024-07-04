import { useLogin } from "@/service";
import { ThrowOnError } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {

import { toast } from "sonner";

const Login = () => {

    const { t } = useTranslation()

    // HOOKS
    const [password, setPassword] = useState("");
    const [focused, setFocused] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [changeIcon, setChangeIcon] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [registerLoading, setRegisterLoading] = useState<boolean>(false)


    const navigate = useNavigate();

    const { mutate } = useLogin();

    const handleShowPassword = () => {
        setPasswordType(prevType => prevType === "text" ? "password" : "text");
        setChangeIcon(prevIcon => !prevIcon);
    };

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegisterLoading(true)
        const loginData: any = { phone: phoneNumber, password };

        mutate(loginData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    toast.success('Login success')
                    const token = res.data || localStorage.getItem('token');
                    const role = token && jwtDecode(token);
                    setRegisterLoading(false)
                    const isAdmin = role["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    localStorage.setItem("token", res.data);
                    if (isAdmin === "Admin" && role.IsPayed === "True") {
                        window.location.href = "/admin/courses"
                    } else if (isAdmin === "Admin" && role.IsPayed === "False") {
                        window.location.href = "/user-dashboard"
                    } else {
                        navigate("/")
                    }
                }


            },
            onError: (error: any) => {
                console.log(error);

                if (error.response.status === 404) {
                    setTimeout(() => {
                        setRegisterLoading(false)
                        toast.error("User not found", {
                            hideProgressBar: false,
                            autoClose: 2000
                        })
                    }, 2000)

                }
                else if (error.response.status === 401) {
                    setTimeout(() => {
                        setRegisterLoading(false)
                        toast.error("Number or Password is incorrect", {
                            hideProgressBar: false,
                            autoClose: 2000
                        })
                    }, 2000)

                }

            },


            },
 
        });
    };

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
        // if (!phoneNumber.replace(/\s/g, '')) {
        //     setPhoneNumber('');
        // }
        // setFocused(false);
    };

    return (
        <div>
            <h3 className="text-center text-[32px] font-[500] text-[#fff] tracking-[2px]">{t("auth.login")}</h3>
            <form onSubmit={handleLogin} className="w-full text-center">
                <label className="text-[16px] text-[#fff] text-left mt-8 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">{t("auth.phone")}
                    <input required placeholder="+998 XX XXX XXXX" onBlur={handleInputBlur} value={focused ? phoneNumber : ""} onFocus={handleInputFocus} onChange={(e) => handlePhoneNumberChange(e.target.value)} id="number" type="text" name="number" className=" bg-[#1b1b1b] p-[10px]    w-full h-[45px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px]   " />
                </label>
                <label className="relative text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="password">{t("auth.password")}
                    <input required value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim())} id="password" type={passwordType} name="password" className=" bg-[#1b1b1b] p-[10px] w-full h-[45px]  mt-[5px] outline-none indent-[5px] py-2  rounded-[6px] " />
                    <span onClick={handleShowPassword} className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545] cursor-pointer">{changeIcon ? "visibility_off" : "visibility"}</span>
                </label>
                <div style={registerLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }} className="w-full mt-8 transition duration-[0.2s]  bg-[#ff1414]  text-[#fff]   text-[18px] font-[400] py-[7px] rounded-[6px] hover:bg-[#fa5757]">
                    {
                        registerLoading ? <div className="register-loader"></div>
                            : <button type="submit" className=" w-full h-full">{t("auth.login")}</button>
                    }
                </div>
                <Link to={"/auth/register"} className="mt-3 text-center inline-block text-[18px] font-[400] text-[#fff] m-auto hover:underline" >{t("auth.if_not_account")}.<span className="text-[#1752e0]"> {t("auth.register")}</span></Link>
            </form>
        </div>
    );
}

export default Login;
