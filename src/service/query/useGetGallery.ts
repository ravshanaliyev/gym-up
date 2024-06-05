import ApiInctance from "@/api";
import { useQuery } from "@tanstack/react-query";


export const useGetGallery = () => {
    return useQuery({
        queryKey: ['get-gallery'],
        queryFn: () => {
            return ApiInctance.get('/images/get-all')
        }
    })
}