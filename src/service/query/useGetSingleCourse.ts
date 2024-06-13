import ApiInctance from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleCourse = (id: number) => {
    return useQuery({
        queryKey: ['get-single-course', id],
        queryFn: () => {
            return ApiInctance.get(`/courses/get/${id}`).then(res => res.data)
        }
    })
}