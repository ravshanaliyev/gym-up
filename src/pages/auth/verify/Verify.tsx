import { useVerify } from "@/service";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = ({ openVerify, setOpenVerify }: { openVerify: boolean, setOpenVerify: Function }) => {

    const phone = localStorage.getItem('verify-number') || ""

    const [code, setCodes] = useState(['', '', '', '']);
    const navigate = useNavigate()


    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCodes = [...code];
            newCodes[index] = value;
            setCodes(newCodes);
            if (value && index < code.length - 1) {
                const nextInput = document.getElementById(`input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.getElementById(`input-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };


    const { mutate } = useVerify()


    const handleVerify = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const verifyData: any = {
            phone: phone,
            code: '0000'
        }

        mutate(verifyData, {
            onSuccess: (res) => {
                if (res.statusCode === 200) {
                    localStorage.setItem("token", res.data)
                    setOpenVerify(false)
                    toast.success("You registered successfully", {
                        position: "top-center",
                        autoClose: 3000,
                        progress: undefined,
                        theme: "dark"
                    })
                    navigate("/")
                }
            }
        })
    }

    return (
        <div style={openVerify ? { display: "flex" } : { display: 'none' }} className="verify-overlay">
            <div className="mt-[5rem] absolute w-[100%] h-full left-0 top-0 z-10 flex items-center justify-center flex-col bg-[#1a1919] px-1 rounded-[6px] max-h-[300px]">
                <h3 className="text-center text-[34px] font-[500] tracking-[2px] text-[#ff1414]">Verification</h3>
                <p className="text-[#fff]">Enter the code we just send on your mobile phone </p>
                <form onSubmit={handleVerify}>
                    <div>
                        {code.map((code, index) => (
                            <input
                                key={index}
                                id={`input-${index}`}
                                type="text"
                                maxLength={1}
                                value={code}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                style={{
                                    width: '40px',
                                    height: '37px',
                                    marginRight: '10px',
                                    textAlign: 'center',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    marginTop: "1.5rem"
                                }}
                            />
                        ))}
                    </div>
                    <button type="submit" className="bg-[#ff1414] w-full max-w-[250px] rounded-[6px] py-[.4rem] text-[#fff] mt-5">SEND CODE</button>
                    <p className="mt-[1rem] text-[#4b81ff]">Don't recieve the code ?</p>
                    <button type="button" className="font-[700] mt-[5px] text-[#1752e0] text-[16px]">Resend</button>
                </form>

            </div>
        </div>
    )
}

export default Verify
