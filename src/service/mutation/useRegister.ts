import { NewUserType } from "@/@types/types";
import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useRegister = () => {
    return useMutation({
        mutationFn: (data: NewUserType) => {
            console.log(data);
            return ApiInctance.post("/auth/register", data)
            .then(res => res?.data)
            .catch(error => {return error})
        }
    })
}