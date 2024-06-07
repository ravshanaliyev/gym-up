import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteImage = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return ApiInctance.delete(`/images/delete/${id}`)
                .then(res => res.data)
        }
    })
}