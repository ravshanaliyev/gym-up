import { NewUserType } from "@/@types/types";
import { useRegister } from "@/service";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import uzbFlag from "@/assets/UzbFlag.svg"; 

const Register = () => {
    const { t } = useTranslation();

    // Hooks
    const [passwordType, setPasswordType] = useState<string>("password");
    const [changeIcon, setChangeIcon] = useState<boolean>(false);
    const [registerLoading, setRegisterLoading] = useState<boolean>(false);
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState<string>("");

    const handleShowPassword = () => {
        setPasswordType((prevType) => (prevType === "text" ? "password" : "text"));
        setChangeIcon((prevIcon) => !prevIcon);
    };

    const { mutate } = useRegister();

    const newUserData: NewUserType = { firstname, lastname, phone: `+998${phoneNumber}`, password };

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

   


    return (
        <>
            <div>
                <h3 className="text-center text-2xl font-medium text-white tracking-wider">{t("auth.register")}</h3>
                <form onSubmit={handleRegister} className="w-full text-center">
                    <label className="text-lg text-white text-left mt-4  inline-block w-full tracking-wide font-normal" htmlFor="firstname">
                        {t("auth.firstname")}
                        <input
                        autoComplete="off"
                            value={firstname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value.trimStart())}
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="bg-gray-900 p-2 w-full h-12 mt-2 outline-none rounded-md"
                        />
                    </label>
                    <label className="text-lg text-white text-left mt-4 inline-block w-full tracking-wide font-normal" htmlFor="lastname">
                        {t("auth.lastname")}
                        <input
                        autoComplete="off"
                            value={lastname}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastname(e.target.value.trimStart())}
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="bg-gray-900 p-2 w-full h-12 mt-2 outline-none rounded-md"
                        />
                    </label>
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
