import ApiInctance from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (id: string) => {
    return useQuery({
        queryKey: ['get-user'],
        queryFn: () => {
            return ApiInctance.get(`/users/get/${id}`).then(res => res.data)
        }
    })
}