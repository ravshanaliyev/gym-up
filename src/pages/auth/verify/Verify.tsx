import { useVerify } from "@/service/mutation/useVerify";
import { ChangeEvent, FormEvent, useState } from "react";

const Verify = ({openVerify, setOpenVerify}: {openVerify: boolean, setOpenVerify: Function}) => {

    const phone = localStorage.getItem('verify-number') || ""

    const [code, setCodes] = useState(['', '', '', '']);


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


    const {mutate} = useVerify()


    const handleVerify = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const verifyData: any = {
            phone: phone,
             code: '0000'
            }

        mutate(verifyData, {
            onSuccess: (res) => {
                console.log(res);
                if(res.statusCode === 200){
                    localStorage.setItem("token", res.data)
                    setOpenVerify(false)
                    window.location.reload()
                }
            }
        })

    }

    return (
        <div style={openVerify ? {display: "block"} : {display: 'none'}} className="absolute left-0 top-[10%]">
            <h3 className="text-center text-[30px] font-[400] tracking-[2px]">Verification</h3>
            <p>Enter the code we just send on your mobile phone </p>
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
                                marginTop: "1rem"
                            }}
                        />
                    ))}
            </div>
                    <button type="submit" className="bg-[#1752e0] w-full max-w-[250px] rounded-[6px] py-[.4rem] text-[#fff] mt-5">SEND CODE</button>
                    <p className="mt-[1rem]">Don't recieve the code ?</p>
                    <button type="button" className="font-[700] mt-[5px] text-[#1752e0] text-[16px]">Resend</button>
                </form>

        </div>
    )
}

export default Verify
