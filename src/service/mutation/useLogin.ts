import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
    return useMutation<any>({
        mutationFn: (login_data) => {            
            return ApiInctance.post("/auth/login", login_data)
            .then(res => res.data)
        }
    })
}