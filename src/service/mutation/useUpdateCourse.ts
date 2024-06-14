import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useUpdateCourse = () => {
    return useMutation({
        mutationKey: ['update-course'],
        mutationFn: (data: any) => {
            return ApiInctance.put("/courses/update", data).then(res => res.data)
            .catch((error) => console.log(error))
        }
    })
}