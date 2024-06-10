import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useDowngradeUser = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return ApiInctance.put(`/identities/downgrade/${id}`)
                .then(res => res.data)
        }
    })
}