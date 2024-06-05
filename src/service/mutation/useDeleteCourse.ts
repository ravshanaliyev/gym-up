import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteCourse = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return ApiInctance.delete(`/courses/delete/${id}`)
                .then(res => res.data)
        }
    })
}