import { IoHome } from "react-icons/io5";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useState } from "react"
import { Button, Footer, Input, Navbar, PagesHeader, Textarea } from "@/components";


const Contact = () => {
    const { register, handleSubmit, reset } = useForm()
    const [isPending, setIsPending] = useState(false)
    const submit = (data: any) => {
        setIsPending(true)
        const telegramBotId = import.meta.env.VITE_APP_TELEGRAM_BOT_API
        const telegramChatId = import.meta.env.VITE_APP_TELEGRAM_CHAT_ID

        const response = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: `Name: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`
            })
        }).then(() => reset()).finally(() => setIsPending(false))

        toast.promise(response, {
            loading: 'Sending message...',
            success: 'Message sent successfully',
            error: 'Something went wrong'
        })
    }
    return (
        <div>
            <Navbar />
            <PagesHeader title={'Contact Us'} />
            <div className="sm:my-[40px] barlow md:my-[60xp] lg:my-[100px] w-full p-6 lg:p-0 lg:w-[1200px] mx-auto">
                <h3 className="text-[28px]">Get In Touch</h3>
                <div className="w-full block lg:flex justify-between gap-8">
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="flex flex-col gap-6">
                                <Textarea {...register('message', { required: true })} disabled={isPending} placeholder="Enter Message" className="pt-4 text-base" />
                                <Input {...register('name', { required: true })} disabled={isPending} className="py-6 text-base" type="text" placeholder="Enter Your Name" />
                                <Input {...register('phone', { required: true })} disabled={isPending} className="py-6 text-base" type="text" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="flex justify-start mt-4">
                                <Button type="submit" disabled={isPending} className="rounded-none text-base uppercase bg-white text-[#ff1313] border border-[#ff1313] hover:bg-[#ff1313] hover:text-white transition px-10 py-6" size={'lg'}>Send</Button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <div className="w-full h-fit py-6  flex flex-col items-center gap-8 justify-start">
                            <div className="flex items-center gap-4">
                                <IoHome className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">Tashkent, Uzbekistan.</h3>
                                    <p className="text-muted-foreground">Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="flex  items-center gap-4">
                                <MdOutlinePhonelinkRing className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">+998977772533</h3>
                                    <p className="text-muted-foreground">Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <CgMail className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">azharinc@gmail.com</h3>
                                    <p className="text-muted-foreground">Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact