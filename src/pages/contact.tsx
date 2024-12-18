import { IoHome } from "react-icons/io5";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { Button, Footer, Input, Navbar, PagesHeader, Textarea } from "@/components";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isPending, setIsPending] = useState(false);
    const { t } = useTranslation();

    const submit = (data: any) => {
        setIsPending(true);
        const telegramBotId = `7126781952:AAFzkcU5J0KH9x2w5FRJjwcN0tkHYPWtO9c`;
        const telegramChatId = 5374989963;

        const response = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: `Name: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`
            })
        }).then(() => reset()).finally(() => setIsPending(false));

        toast.promise(response, {
            loading: t('contact.sending'),
            success: t('contact.success'),
            error: t('contact.error')
        });
    };

    return (
        <div>
            <Navbar />
            <PagesHeader title={t('contact.contact_us_today')} />
            <div className="sm:my-[40px] barlow md:my-[60xp] lg:my-[100px] w-full p-6 lg:p-0 lg:w-[1200px] mx-auto">
                <h3 className="text-[28px]">{t('contact.get_in_touch')}</h3>
                <div className="w-full block lg:flex justify-between gap-8">
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="flex flex-col gap-6">
                                <Textarea
                                    {...register('message', { required: true })}
                                    disabled={isPending}
                                    placeholder={t('contact.message')} // Translated placeholder
                                    className="pt-4 text-base"
                                />
                                <Input
                                    {...register('name', { required: true })}
                                    disabled={isPending}
                                    className="py-6 text-base"
                                    type="text"
                                    placeholder={t('contact.name')} // Translated placeholder
                                />
                                <Input
                                    {...register('phone', { required: true })}
                                    disabled={isPending}
                                    className="py-6 text-base"
                                    type="text"
                                    placeholder={t('contact.phone')} // Translated placeholder
                                />
                            </div>
                            <div className="flex justify-start mt-4">
                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    className="rounded-none text-base uppercase bg-white text-[#ff1313] border border-[#ff1313] hover:bg-[#ff1313] hover:text-white transition px-10 py-6"
                                    size={'lg'}
                                >
                                    {t('contact.submit')}
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                        <div className="w-full h-fit py-6  flex flex-col items-center gap-8 justify-start">
                            <div className="flex items-center gap-4">
                                <IoHome className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">{t('contact.address')}</h3>
                                    <p className="text-muted-foreground">{t('contact.address_name')}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MdOutlinePhonelinkRing className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">{t('contact.phone')}</h3>
                                    <p className="text-muted-foreground">{"+998971234567"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <CgMail className="text-3xl" />
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-lg">{t('contact.email')}</h3>
                                    <p className="text-muted-foreground">{"egodevs@gmail.com"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
