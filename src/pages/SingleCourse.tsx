import { VideoType } from '@/@types/types'
import Navbar from '@/components/shared/navbar'
import { useGetCourseVideos } from '@/service/query/useGetCourseVideos'
import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const SingleCourse = () => {

    const { id } = useParams<string>()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { data: CourseVideos } = useGetCourseVideos(id)

    const [searchValue, setSearchValue] = useState<string>("")
    const [searchedData, setSearchedData] = useState<VideoType[]>([])

    useEffect(() => {
        if (searchValue.length > 0) {
            const searched: VideoType[] = CourseVideos?.data?.data?.filter((item: VideoType) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            setSearchedData(searched)
        }
        else {
            setSearchedData(CourseVideos?.data?.data)
        }
    }, [searchValue, CourseVideos?.data])


    const token = localStorage.getItem("token")

    useLayoutEffect(() => {
        if (token) {
            return;
        }
        else {
            navigate("/courses")
        }
    }, [pathname])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='w-full flex mt-[2rem]'>
                    <form className='max-w-[500px] h-[40px] w-full flex items-center rounded-[6px] overflow-hidden  border border-[#f83636]'>
                        <input onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} className='w-full outline-none h-full indent-[10px]' type="text" placeholder='Search Video...' />
                        <span className='material-symbols-outlined bg-[#ff1414] h-[100%] px-[.7rem] text-[#fff] flex items-center justify-center transition duration-[.2s] hover:cursor-pointer hover:bg-[#ff3131de]'>search</span>
                    </form>
                </div>
                <div>
                    {
                        searchedData?.length > 0 ?
                            <div className=' grid grid-cols-3 mt-[2rem] gap-y-[2.5rem] gap-x-[1rem]'>
                                {
                                    searchedData.map((video: VideoType) =>
                                        <div className='max-w-[390px]' key={video.id}>
                                            <video className='w-full rounded-sm h-[230px] ' src={`http://45.138.158.207:8080/videos/${video?.attachment?.fileName}`} controls></video>
                                            <h3 className='tracking-[1px] font-[600] text-[18px]'><span className='font-[400]'>title:</span> {video.name}</h3>
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <div className='flex items-center flex-col h-[400px] gap-y-[.6rem] justify-center text-center'>
                                <h4 className='text-[80px] font-bold tracking-[3px]'>404</h4>
                                <h5 className='text-[32px] font-[600]'>Video Not Found</h5>
                                <p className='text-[21px] max-w-[520px] font-[400] tracking-[.5px]'>The video you were looking for could not be found. Please try again later.</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleCourse
