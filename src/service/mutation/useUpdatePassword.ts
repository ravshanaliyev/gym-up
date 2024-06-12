import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: (data: any) => {
            return ApiInctance.put(`/users/update-password?oldPass=${data.oldPass}&newPass=${data.newPass}`).then(res => res.data)
        }
    })
}