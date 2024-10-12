import { useLogin } from "@/service";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const { t } = useTranslation();

    // HOOKS
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("+998");
    const [changeIcon, setChangeIcon] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [registerLoading, setRegisterLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const { mutate } = useLogin();

    const handleShowPassword = () => {
        setPasswordType(prevType => prevType === "text" ? "password" : "text");
        setChangeIcon(prevIcon => !prevIcon);
    };

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegisterLoading(true);
        const loginData: any = { phone: `${countryCode} ${phoneNumber}`, password };

        mutate(loginData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    toast.success('Login success');
                    const token = res.data || localStorage.getItem('token');
                    const role = token && jwtDecode(token);
                    setRegisterLoading(false);
                    const isAdmin = role["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    localStorage.setItem("token", res.data);
                    if (isAdmin === "Admin" && role.IsPayed === "True") {
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
            }
        });
    };

    const handlePhoneNumberChange = (input_value: string) => {
        // Faqat raqamlar qabul qilinadi va maksimal uzunlik 9 raqam bilan cheklanadi
        let formattedValue = input_value.replace(/\D/g, '').slice(0, 9);

        // Raqamlarni chiziqcha bilan formatlash: 97-123-45-67
        if (formattedValue.length > 2 && formattedValue.length <= 5) {
            formattedValue = formattedValue.replace(/(\d{2})(\d{3})/, '$1-$2');
        } else if (formattedValue.length > 5 && formattedValue.length <= 7) {
            formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{2})/, '$1-$2-$3');
        } else if (formattedValue.length > 7) {
            formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4');
        }

        setPhoneNumber(formattedValue);
    };

    return (
        <div>
            <h3 className="text-center text-2xl font-medium text-white tracking-wider">{t("auth.login")}</h3>
            <form onSubmit={handleLogin} className="w-full text-center">
                <label className="text-lg relative text-white text-left mt-8 inline-block w-full tracking-wide font-normal" htmlFor="number">
                    {t("auth.phone")}
                    <div className="flex items-center gap-x-2 mt-2">
                        <select 
                            value={countryCode} 
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="bg-gray-900 p-2 h-12 text-white rounded-md">
                            <option value="+998">+998</option>
                        </select>
                        <input
                            required
                            placeholder="97-123-45-67"
                            value={phoneNumber}
                            onChange={(e) => handlePhoneNumberChange(e.target.value)}
                            id="number"
                            type="text"
                            name="number"
                            className="bg-gray-900 p-2 w-full h-12 outline-none rounded-md"
                        />
                    </div>
                </label>
                <label className="relative text-lg text-white text-left mt-5 inline-block w-full tracking-wide font-normal" htmlFor="password">
                    {t("auth.password")}
                    <input
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
                <div style={{ cursor: registerLoading ? "not-allowed" : "pointer" }} className="w-full mt-8 transition duration-200 bg-red-600 text-white text-lg font-normal py-2 rounded-md hover:bg-red-500">
                    {registerLoading ? <div className="register-loader"></div> : <button type="submit" className="w-full h-full">{t("auth.login")}</button>}
                </div>
                <Link to="/auth/register" className="mt-3 text-center inline-block text-lg font-normal text-white m-auto hover:underline">
                    {t("auth.if_not_account")}.<span className="text-blue-600"> {t("auth.register")}</span>
                </Link>
            </form>
        </div>
    );
};

export default Login;
