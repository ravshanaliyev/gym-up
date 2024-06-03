import ApiInctance from "@/api";
import { useQuery } from "@tanstack/react-query";


export const useGetCourseVideos = (id: string | undefined) => {
    return useQuery({
        queryKey: ['get-course-videos'],
        queryFn:() => {
            return ApiInctance.get(`/videos/get-by-course?courseId=${id}`)
        }
    })
}