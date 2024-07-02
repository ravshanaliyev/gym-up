import { useCreateCourse } from "./mutation/useCreateCourse";
import { useCreateImage } from "./mutation/useCreateImage";
import { useCreateUser } from "./mutation/useCreateUser";
import { useCreateVideo } from "./mutation/useCreateVideo";
import { useDeleteCourse } from "./mutation/useDeleteCourse";
import { useDeleteImage } from "./mutation/useDeleteImage";
import { useDeleteUser } from "./mutation/useDeleteUser";
import { useDeleteVideo } from "./mutation/useDeleteVideo";
import { useDowngradeUser } from "./mutation/useDowngradeUser";
import { useLogin } from "./mutation/useLogin";
import { useRegister } from "./mutation/useRegister";
import { useUpdateCourse } from "./mutation/useUpdateCourse";
import { useUpdateImage } from "./mutation/useUpdateImage";
import { useUpdatePassword } from "./mutation/useUpdatePassword";
import { useUpdateUser } from "./mutation/useUpdateUser";
import { useUpdateVideo } from "./mutation/useUpdateVideo";
import { useUpgradeUser } from "./mutation/useUpgradeUser";
import { useVerify } from "./mutation/useVerify";
import { useGetCourseVideos } from "./query/useGetCourseVideos";
import { useGetCourses } from "./query/useGetCourses";
import { useGetGallery } from "./query/useGetGallery";
import { useGetSingleCourse } from "./query/useGetSingleCourse";
import { useGetUser } from "./query/useGetUser";
import { useGetUsers } from "./query/useGetUsers";
import { client } from "./QueryClient";
export {
    useCreateCourse, useCreateImage, useCreateUser, useCreateVideo, useDeleteCourse,
    useDeleteImage, useDeleteUser, useDowngradeUser, useLogin, useRegister, useUpdateCourse,
    useUpdateImage, useUpdatePassword, useUpdateUser, useUpdateVideo, useUpgradeUser, useVerify,
    useGetCourseVideos, useGetCourses, useGetGallery, useGetSingleCourse, useGetUser, useGetUsers, useDeleteVideo, client
}