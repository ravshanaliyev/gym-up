import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useUpdateCourse = () => {
    return useMutation({
        mutationKey: ['update-course'],
        mutationFn: (data: any) => {
            return ApiInctance.put(`/courses/update?Id=${data.id}&Title=${data.title}&Description=${data.description}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(res => res.data)
                .catch((error) => console.log(error))
        }
    })
}