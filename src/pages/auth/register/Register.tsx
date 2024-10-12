import { NewUserType } from "@/@types/types";
import { useRegister } from "@/service";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

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

    const newUserData: NewUserType = { firstname, lastname, phone: `${phoneCode} ${phoneNumber}`, password };

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

    // Telefon raqamini chiziqchalar bilan formatlash: 97-123-45-67
    const handlePhoneNumberChange = (input_value: string) => {
        let formattedValue = input_value.replace(/\D/g, '').slice(0, 9);

        // Chiziqcha qo'shib formatlash
        if (formattedValue.length > 2 && formattedValue.length <= 5) {
            formattedValue = formattedValue.replace(/(\d{2})(\d{3})/, '$1-$2');
        } else if (formattedValue.length > 5 && formattedValue.length <= 7) {
            formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{2})/, '$1-$2-$3');
        } else if (formattedValue.length > 7) {
            formattedValue = formattedValue.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4');
        }

        setPhoneNumber(formattedValue);
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
                <h3 className="text-center text-[30px] font-[500] text-[#fff] tracking-[2px]">{t("auth.register")}</h3>
                <form onSubmit={handleRegister} className="w-full text-center">
                    <label className="text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="firstname">
                        {t("auth.firstname")}
                        <input
                            value={firstname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value.trimStart())}
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="bg-[#1b1b1b] p-[10px] w-full h-[42px] mt-[5px] outline-none indent-[5px] py-2 rounded-[6px]"
                        />
                    </label>
                    <label className="text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="lastname">
                        {t("auth.lastname")}
                        <input
                            value={lastname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value.trimStart())}
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="bg-[#1b1b1b] p-[10px] w-full h-[42px] mt-[5px] outline-none indent-[5px] py-2 rounded-[6px]"
                        />
                    </label>
                    <label className="text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="number">
                        {t("auth.phone")}
                        <div className="flex">
                            <select
                                value={phoneCode}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setPhoneCode(e.target.value)}
                                className="bg-[#1b1b1b] p-[10px] w-[30%] h-[42px] mt-[5px] outline-none rounded-[6px]"
                            >
                                <option value="+998">+998</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                {/* Boshqa kodlar */}
                            </select>
                            <input
                                placeholder="XX XXX XX XX"
                                value={focused ? phoneNumber : ""}
                                onFocus={handleInputFocus}
                                onChange={(e) => handlePhoneNumberChange(e.target.value)}
                                id="number"
                                type="text"
                                name="number"
                                className="bg-[#1b1b1b] p-[10px] w-[70%] h-[42px] mt-[5px] outline-none indent-[5px] py-2 rounded-[6px]"
                            />
                        </div>
                    </label>
                    <label className="relative text-[16px] text-[#fff] text-left mt-5 inline-block w-full tracking-[.5px] font-[400]" htmlFor="password">
                        {t("auth.password")}
                        <input
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value.trim())}
                            id="password"
                            type={passwordType}
                            name="password"
                            className="bg-[#1b1b1b] p-[10px] w-full h-[42px] mt-[5px] outline-none indent-[5px] py-2 rounded-[6px]"
                        />
                        <span
                            onClick={handleShowPassword}
                            className="material-symbols-outlined absolute right-[2%] top-[60%] text-[20px] text-[#464545] cursor-pointer"
                        >
                            {changeIcon ? "visibility_off" : "visibility"}
                        </span>
                    </label>
                    <div
                        style={registerLoading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
                        className="w-full mt-8 transition duration-[0.2s] bg-[#ff1414] text-[#fff] text-[18px] font-[400] py-[7px] rounded-[6px] hover:bg-[#fa5757]"
                    >
                        {registerLoading ? <div className="register-loader"></div> : <button type="submit" className="">{t("auth.register")}</button>}
                    </div>
                    <Link to="/auth/login" className="mt-3 text-center inline-block font-[400] text-[#fff] text-[18px] m-auto hover:underline">
                        {t("auth.if_already_exist")}, <span className="text-[#1752e0]">{t("auth.login")}</span>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default Register;
