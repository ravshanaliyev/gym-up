import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useUpdateUser = () => {
    return useMutation({
        mutationFn: (data: any) => {
            return ApiInctance.put("/users/update", data).then(res => res.data)
        }
    })
}