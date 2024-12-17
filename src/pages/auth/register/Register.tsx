import { NewUserType } from "@/@types/types";
import { useRegister } from "@/service";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import InputDemo from "@/utils/InputNumber";


const Register = () => {
    const { t } = useTranslation();

    // Hooks
    const [passwordType, setPasswordType] = useState<string>("password");
    const [changeIcon, setChangeIcon] = useState<boolean>(false);
    const [registerLoading, setRegisterLoading] = useState<boolean>(false);
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("97");
    const [password, setPassword] = useState<string>("");
    const [phoneCode, setPhoneCode] = useState<string>("+998");
    const [focused, setFocused] = useState<boolean>(false);

    const handleShowPassword = () => {
        setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
        setChangeIcon((prevIcon) => !prevIcon);
    };

    const { mutate } = useRegister();

    const newUserData: NewUserType = { firstname, lastname, phone: `${phoneCode}${phoneNumber}`, password };

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegisterLoading(true);

        mutate(newUserData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    localStorage.setItem("verify-number", phoneNumber);
                    setRegisterLoading(false);
                    localStorage.setItem("token", res.data);
                    window.location.href = "/";
                    toast.success("Register success");
                } else {
                    setRegisterLoading(false);
                }
            }
        });
    };


    const handleInputFocus = () => {
        if (!phoneNumber) {
            setPhoneNumber("97");
        }
        setFocused(true);
    };

    return (
        <>
            <div>
                <h3 className="text-center text-2xl font-medium text-white tracking-wider">{t("auth.register")}</h3>
                <form onSubmit={handleRegister} className="w-full text-center">
                    <label className="text-lg text-white text-left mt-4  inline-block w-full tracking-wide font-normal" htmlFor="firstname">
                        {t("auth.firstname")}
                        <input
                            value={firstname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value.trimStart())}
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="bg-gray-900 p-2 w-full h-12 mt-2 outline-none rounded-md"
                        />
                    </label>
                <InputDemo/>
                    <label className="text-lg text-white text-left mt-4 inline-block w-full tracking-wide font-normal" htmlFor="lastname">
                        {t("auth.lastname")}
                        <input
                            value={lastname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value.trimStart())}
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="bg-gray-900 p-2 w-full h-12 mt-2 outline-none rounded-md"
                        />
                    </label>
                    <label className="text-lg text-white text-left mt-4 inline-block w-full tracking-wide font-normal" htmlFor="number">
                        {t("auth.phone")}
                        <div className="flex items-center gap-x-2 ">
                            <select
                                value={phoneCode}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setPhoneCode(e.target.value)}
                                className="bg-gray-900 p-2 h-12 mt-2 outline-none rounded-md"
                            >
                                <option value="+998">+998</option>
                            </select>
                            <input
                                placeholder="12-345-56-78"
                                value={focused ? phoneNumber : ""}
                                onFocus={handleInputFocus}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                id="number"
                                type="text"
                                name="number"
                                className="bg-gray-900 p-2 w-[100%] h-12 mt-2 outline-none rounded-md"
                            />
                        </div>
                    </label>
                    <label className="relative text-lg text-white text-left mt-4 inline-block w-full tracking-wide font-normal" htmlFor="password">
                        {t("auth.password")}
                        <input
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim())}
                            id="password"
                            type={passwordType}
                            name="password"
                            className="bg-gray-900 p-2 w-full h-12 mt-2 outline-none rounded-md"
                        />
                        <span
                            onClick={handleShowPassword}
                            className="material-symbols-outlined absolute right-2 top-[70%] transform -translate-y-1/2 text-lg text-gray-500 cursor-pointer"
                        >
                            {changeIcon ? "visibility_off" : "visibility"}
                        </span>
                    </label>
                    <div
                        style={registerLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                        className="w-full mt-8 transition duration-200 bg-red-600 text-white text-lg font-normal py-2 rounded-md hover:bg-red-500"
                    >
                        {registerLoading ? <div className="register-loader"></div> : <button type="submit">{t("auth.register")}</button>}
                    </div>
                    <Link to="/auth/login" className="mt-3 text-center inline-block font-normal text-white text-lg m-auto hover:underline">
                        {t("auth.if_already_exist")}, <span className="text-blue-600">{t("auth.login")}</span>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default Register;
