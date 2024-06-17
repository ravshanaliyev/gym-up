import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useUpdateImage = () => {
    return useMutation({
        mutationFn: (data: any) => {
            //@ts-ignore
            return ApiInctance.put(`/images/update?Id=${data.Id}&Name=${data.Name}&Description=${data.Description}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => res.data)
        }
    })
}