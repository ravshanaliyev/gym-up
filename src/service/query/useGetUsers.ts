import ApiInctance from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['get-users'],
        queryFn: () => {
            return ApiInctance.get("/users/get-all").then(res => res.data)
        }
    })
}