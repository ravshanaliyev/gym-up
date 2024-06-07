import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return ApiInctance.delete(`/users/delete/${id}`)
                .then(res => res.data)
        }
    })
}