import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateCourse = () => {
    return useMutation({
        mutationFn: (data: FormData) => {
            //@ts-ignore
            return ApiInctance.post(`/courses/create?Title=${data.title}&Description=${data.description}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => res.data)
        }
    })
}