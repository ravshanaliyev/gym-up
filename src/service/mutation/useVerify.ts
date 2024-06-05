import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useVerify = () => {
    return useMutation({
        mutationFn: (code) => {            
            return ApiInctance.post(`/auth/register/verify`, code)
            .then(res => res.data)
            .catch(error => console.log(error))
        }
    })
}

