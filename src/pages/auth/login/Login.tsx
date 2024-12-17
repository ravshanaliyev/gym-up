import { useLogin } from "@/service";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import uzbFlag from "@/assets/UzbFlag.svg"; 

const Login = () => {
    const { t } = useTranslation();

    // HOOKS
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [changeIcon, setChangeIcon] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [registerLoading, setRegisterLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { mutate } = useLogin();

    const handleShowPassword = () => {
        setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
        setChangeIcon((prevIcon) => !prevIcon);
    };

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegisterLoading(true);
        const loginData: any = { phone: `+998${phoneNumber}`, password };

        mutate(loginData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    toast.success("Login success");
                    const token = res.data || localStorage.getItem("token");
                    const role = token && jwtDecode(token);
                    setRegisterLoading(false);
                    const isAdmin = role["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    localStorage.setItem("token", res.data);
                    if (isAdmin === "Admin") {
                        window.location.href = "/admin/courses";
                    } else if (isAdmin === "Admin" && role.IsPayed === "False") {
                        window.location.href = "/user-dashboard";
                    } else {
                        navigate("/");
                    }
                }
            },
            onError: (error: any) => {
                if (error.response.status === 404) {
                    setRegisterLoading(false);
                    toast.error("User not found");
                } else if (error.response.status === 401) {
                    setRegisterLoading(false);
                    toast.error("Number or Password is incorrect");
                }
            },
        });
    };

    return (
        <div>
            <h3 className="text-center text-2xl font-medium text-white tracking-wider">{t("auth.login")}</h3>
            <form onSubmit={handleLogin} className="w-full text-center">
                <label className="text-lg relative text-white text-left mt-8 inline-block w-full tracking-wide font-normal" htmlFor="number">
                    {t("auth.phone")}
                    <div className="flex items-center gap-x-0 mt-2 rounded-md bg-gray-900">
                        <div className="flex items-center  p-2 h-12  ">
                            <img src={uzbFlag} alt="UZB Flag" className="w-8 h-8 " />
                            <span className="text-white ml-2">+998</span>
                        </div>
                        <input
                        autoComplete="off"
                            required
                            placeholder="90 123 45 67"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))} 
                            id="number"
                            type="text"
                            name="number"
                            maxLength={9} // Restrict input to 9 digits for Uzbekistan phone numbers
                            className="bg-gray-900 p-2 w-fit h-12 outline-none  text-white"
                        />
                    </div>
                </label>
                <label className="relative text-lg text-white text-left mt-5 inline-block w-full tracking-wide font-normal" htmlFor="password">
                    {t("auth.password")}
                    <input
                    autoComplete="off"
                        required
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim())}
                        id="password"
                        type={passwordType}
                        name="password"
                        className="bg-gray-900 p-2 w-full h-12 mt-1 outline-none rounded-md"
                    />
                    <span
                        onClick={handleShowPassword}
                        className="material-symbols-outlined absolute right-2 top-1/2 transform translate-y-1 text-lg text-gray-500 cursor-pointer"
                    >
                        {changeIcon ? "visibility_off" : "visibility"}
                    </span>
                </label>
                <div
                    style={{ cursor: registerLoading ? "not-allowed" : "pointer" }}
                    className="w-full mt-8 transition duration-200 bg-red-600 text-white text-lg font-normal py-2 rounded-md hover:bg-red-500"
                >
                    {registerLoading ? (
                        <div className="register-loader"></div>
                    ) : (
                        <button type="submit" className="w-full h-full">
                            {t("auth.login")}
                        </button>
                    )}
                </div>
                <Link to="/auth/register" className="mt-3 text-center inline-block text-lg font-normal text-white m-auto hover:underline">
                    {t("auth.if_not_account")}.<span className="text-blue-600"> {t("auth.register")}</span>
                </Link>
            </form>
        </div>
    );
};

export default Login;
