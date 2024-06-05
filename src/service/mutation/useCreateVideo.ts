import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useCreateVideo = () => {
    return useMutation({
        mutationFn: (data: FormData) => {
            return ApiInctance.post("/videos/create", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => res.data)
        }
    })
}