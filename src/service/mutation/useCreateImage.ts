import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useCreateImage = () => {
    return useMutation({
        mutationFn: (data: FormData) => {
            return ApiInctance.post("/images/create", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => res.data)
        }
    })
}