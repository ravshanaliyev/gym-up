import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useUpgradeUser = () => {
    return useMutation({
        mutationFn: (id: number) => {
            return ApiInctance.put(`/identities/upgrade/${id}`)
                .then(res => res.data)
        }
    })
}