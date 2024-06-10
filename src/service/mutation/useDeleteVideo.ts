import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteVideo = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return ApiInctance.delete(`/videos/delete/${id}`)
                .then(res => res.data)
        }
    })
}