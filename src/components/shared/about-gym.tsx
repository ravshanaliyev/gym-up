import { Button } from '../ui/button'

const AboutGym = () => {
    return (
        <div className='container my-16'>
            <div className="w-full  mx-auto">
                <div className="w-full  lg:flex items-center justify-center gap-x-20">
                    <div className="w-full max-w-[570px]  h-[600px] ">
                        <img className='w-full h-full object-cover' src="https://themewagon.github.io/fitnessclub/assets/img/gallery/gallery2.png" alt="" />
                    </div>
                    <div className="w-full  mt-6 lg:mt-0">
                        <div className="flex items-center gap-4 text-[#ff1313]">
                            <div className='h-[3px] w-[80px] bg-[#ff1313]'></div>
                            <h3 className='uppercase  text-2xl  teko'>About Me</h3>
                        </div>
                        <h2 className='text-[44px] font-bold text-[#2c234d] leading-snug my-4 teko max-w-[520px]'>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                        <p className='text-base text-[#212025] mb-4 barlow font-semibold max-w-[600px]'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                        <p className='text-base text-[#212025] my-4 barlow max-w-[520px]'>Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                        <Button className='rounded-none text-xl uppercase px-10 !py-6' size={'lg'}>Became a Member</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutGym