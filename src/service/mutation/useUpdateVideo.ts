import ApiInctance from "@/api";
import { useMutation } from "@tanstack/react-query";


export const useUpdateVideo = () => {
    return useMutation({
        mutationFn: (data: any) => {
            return ApiInctance.put(`/videos/update?Id=${data.id}&Name=${data.name}&Description=${data.description}&Teacher=${data.teacher}&CourseId=${data.courseId}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(res => res.data)
        }
    })
}