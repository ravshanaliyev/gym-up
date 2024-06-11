import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: (data: any) => {
            return ApiInctance.put("/users/update-password", data).then(res => res.data)
        }
    })
}