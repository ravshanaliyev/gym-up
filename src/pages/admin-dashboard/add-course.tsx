import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCreateCourse } from "@/service/mutation/useCreateCourse"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),

    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
})



const AddCourse = () => {
    const { mutate } = useCreateCourse()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        mutate(values, {
            onSuccess: (res) => {
                console.log(res);
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold">Add Course</h1>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="block lg:flex items-start gap-6 mt-4">
                            <div className="w-full  space-y-4 bg-white p-4 rounded-xl">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Title</FormLabel>
                                            <FormControl>
                                                <Input className="text-base" placeholder="example: gym for beginners" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Description</FormLabel>
                                            <FormControl>
                                                <Textarea className="text-base" placeholder="lorem ipsum dolor" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button className="bg-[#3c50e0] hover:bg-[#3c50e0] hover:bg-opacity-90 text-white " type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default AddCourse