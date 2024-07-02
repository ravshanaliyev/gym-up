import { VideoType } from "@/@types/types"
import { useGetCourseVideos } from "@/service"
import { Link, useParams } from "react-router-dom"

const CoursesTable = () => {
    const { id } = useParams()
    const { data } = useGetCourseVideos(id)
    return (
        <div className='container my-10'>
            <table className="w-full text-center">
                <thead className="bg-[#445E87] sticky top-0 z-10">
                    <tr>
                        <th className="px-4 py-[10px] text-[#60ABD8] text-[16px]">Mavzu</th>
                        <th className="px-4 py-[10px] text-[#60ABD8] text-[16px]">Video</th>
                        <th className="px-4 py-[10px] text-[#60ABD8] text-[16px]">Holat</th>
                        <th className="px-4 py-[10px] text-[#60ABD8] text-[16px]">Narxi</th>
                        <th className="px-4 py-[10px] text-[#60ABD8] text-[16px]">Sana</th>
                    </tr>
                </thead>
            </table>
            <div className="h-[350px] overflow-y-auto">
                <table className="w-full text-center">
                    <tbody className="w-full">
                        {data?.data.data.map((courseVideo: VideoType) => (
                            <tr key={courseVideo.id} className="mt-[20px] py-[1rem]">
                                <td className="px-4 py-4">
                                    <Link className="text-[#fff]" to="">{courseVideo.name}</Link>
                                </td>
                                <td className="px-4 py-4 flex justify-center">
                                    <Link to="" className="rounded-full bg-[blue] text-white flex items-center justify-center w-[20px] h-[20px]">
                                        1
                                    </Link>
                                </td>
                                <td className="px-4 py-4">
                                    <Link to="" className="py-[7px] px-[10px] text-[15px] rounded-[5px] bg-[#1b751c] text-[#fff]">
                                        Videoni Ko'rish
                                    </Link>
                                </td>
                                <td className="px-4 py-4 text-[#fff]">100$</td>
                                <td className="px-4 py-4 text-[#fff]">01.05.2024</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CoursesTable