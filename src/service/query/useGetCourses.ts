import ApiInctance from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCourses = () => {
    return useQuery({
        queryKey: ['get-courses'],
        queryFn: () => {
            return ApiInctance.get("/courses/get-all").then(res => res.data)
        }
    })
}