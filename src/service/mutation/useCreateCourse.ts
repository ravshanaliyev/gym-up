import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

interface CreateCourseType {
    title: string
    description: string
}
export const useCreateCourse = () => {
    return useMutation({
        mutationFn: (data: CreateCourseType) => {
            return ApiInctance.post("/courses/create", data)
                .then(res => res.data)
        }
    })
}