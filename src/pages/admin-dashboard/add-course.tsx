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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    course_title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),

    course_description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
    price: z.string().min(2, {
        message: "Price must be at least 2 characters.",
    }),
    image: z.string().min(2, {
        message: "Image must be exist",
    }),
})



const AddCourse = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            course_title: "",
            course_description: "",
            price: "",
            image: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold">Add Course</h1>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="block lg:flex items-start gap-6 mt-4">
                            <div className="w-full lg:w-1/2 space-y-4 bg-white p-4 rounded-xl">
                                <FormField
                                    control={form.control}
                                    name="course_title"
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
                                    name="course_description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Description</FormLabel>
                                            <FormControl>
                                                <Input className="text-base" placeholder="lorem ipsum dolor" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Price</FormLabel>
                                            <FormControl>
                                                <Input type="number" className="text-base" placeholder="200 000" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Image</FormLabel>
                                            <FormControl>
                                                <Input type="file" className="text-base" placeholder="200 000" {...field} />
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