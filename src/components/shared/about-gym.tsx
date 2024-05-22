import { Button } from '../ui/button'

const AboutGym = () => {
    return (
        <div className='container my-16'>
            <div className="w-full lg:w-[1200px] mx-auto">
                <div className="w-full block lg:flex items-center gap-10">
                    <div className="w-full lg:w-1/2">
                        <img className='w-full' src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <div className="flex items-center gap-4 text-[#ff1313]">
                            <div className='h-[3px] w-[80px] bg-[#ff1313]'></div>
                            <h3 className='uppercase  text-2xl '>About Me</h3>
                        </div>
                        <h2 className='text-[44px] font-bold text-[#2c234d] leading-snug my-4'>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                        <p className='text-2xl text-[#212025] font-thin mb-4'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                        <p className='text-2xl text-[#212025] font-thin mb-4'>Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                        <Button className='rounded-none text-xl uppercase px-10 !py-6' size={'lg'}>Became a Member</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutGym