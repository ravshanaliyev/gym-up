import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useCreateUser = () => {
    return useMutation({
        mutationFn: (data: any) => {
            return ApiInctance.post("/users/create", data).then(res => res.data)
        }
    })
}